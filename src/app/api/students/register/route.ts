import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { connectToDB } from "@/db/mongo";
import Student_Registration from "@/models/Student_Registration";
import { authOptions } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    // Get session from NextAuth
    const session = await getServerSession(authOptions);

    // Check if the user is authenticated
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized: Please log in to access this resource" },
        { status: 401 }
      );
    }

    // Parse request body
    const { name, email, phoneNumber, dateOfBirth, gender, course, marksheet } =
      await req.json();

    // Validate required fields
    if (!name || !email || !marksheet) {
      return NextResponse.json(
        { error: "Name, email, and marksheet are required" },
        { status: 400 }
      );
    }

    // Connect to database
    await connectToDB();

    // Check if the student already exists
    const existingStudent = await Student_Registration.findOne({ email });
    if (existingStudent) {
      return NextResponse.json(
        { error: "Student already exists" },
        { status: 400 }
      );
    }

    // Save the new student to the database
    const newStudent = new Student_Registration({
      name,
      email,
      phoneNumber,
      dateOfBirth,
      gender,
      course,
      marksheet,
      isVerified: false, // default to false
      walletBalance: 0, // default balance is 0
    });
    await newStudent.save();

    return NextResponse.json(
      { message: "Student registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error during student registration:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
