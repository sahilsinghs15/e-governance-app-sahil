import { NextResponse } from "next/server";
import Student from "@/models/Student_Registration";
import { connectToDB } from "@/db/mongo";

export async function POST(req: Request) {
  try {
    // Parse the request body
    const { studentId } = await req.json();

    if (!studentId) {
      return NextResponse.json(
        { error: "Student ID is required" },
        { status: 400 }
      );
    }

    // Connect to the database
    await connectToDB();

    // Find the student by ID
    const student = await Student.findById(studentId);
    if (!student) {
      return NextResponse.json({ error: "Student not found" }, { status: 404 });
    }

    if (student.admitted) {
      return NextResponse.json({ error: "Fee already paid" }, { status: 400 });
    }

    // Determine roll number range based on the course
    let rollNumberRange: { start: number; end: number } | null = null;

    switch (student.course) {
      case "IT":
        rollNumberRange = { start: 1, end: 60 };
        break;
      case "CS":
        rollNumberRange = { start: 61, end: 120 };
        break;
      case "DS":
        rollNumberRange = { start: 121, end: 180 };
        break;
      default:
        return NextResponse.json({ error: "Invalid course" }, { status: 400 });
    }

    // Assign a roll number based on the number of students already admitted
    const assignedRollNumber = await assignRollNumber(student.course, rollNumberRange);
    if (!assignedRollNumber) {
      return NextResponse.json(
        { error: "No roll numbers available" },
        { status: 400 }
      );
    }

    // Update the student's data
    student.admitted = true;
    student.rollNo = assignedRollNumber;
    await student.save();

    // Return the updated student data
    return NextResponse.json(student);
  } catch (error) {
    console.error("Error processing payment:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

async function assignRollNumber(
  course: string,
  { start, end }: { start: number; end: number }
) {
  // Count the number of students already admitted in this course
  const studentCount = await Student.countDocuments({ course, admitted: true });

  // Calculate the new roll number
  const newRollNumber = start + studentCount;

  // Ensure the new roll number does not exceed the range
  if (newRollNumber > end) {
    return null; // No roll numbers available
  }

  return newRollNumber;
}
