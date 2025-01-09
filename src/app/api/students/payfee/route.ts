//student/payfee
import { NextResponse } from "next/server";
import Student from "@/models/Student_Registration";
import { connectToDB } from "@/db/mongo";

export async function POST(req: Request) {
  try {
    const { studentId } = await req.json();
    if (!studentId) {
      return NextResponse.json(
        { error: "Student id is required" },
        { status: 400 }
      );
    }

    await connectToDB();

    const student = await Student.findById(studentId);
    if (!student) {
      return NextResponse.json({ error: "Fee already paid" }, { status: 400 });
    }

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

    //Assign a roll number
    const assignedRollNumber = await assignRollNumber(rollNumberRange);
    if (!assignedRollNumber) {
      return NextResponse.json(
        {
          error: "NO roll numbers are available",
        },
        { status: 400 }
      );
    }

    //Update the student's data

    student.admitted = true;
    student.rollNo = assignedRollNumber;
    await student.save();
    //return the updated student data
    return NextResponse.json(student);
  } catch (error) {
    console.error("error processing payment:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

async function assignRollNumber({
  start,
  end,
}: {
  start: number;
  end: number;
}) {
  const usedRollNumbers = await Student.find({
    rollNo: { $gte: start, $lte: end },
  }).distinct("rollNo");

  for (let i = start; i <= end; i++) {
    if (!usedRollNumbers.includes(i)) {
      return i;
    }
  }

  return null;
}
