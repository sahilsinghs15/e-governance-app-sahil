import { NextResponse } from "next/server";
import { Student } from "@/models/User";
import { connectToDB } from "@/db/mongo";

export async function POST(req: Request) {
  const { studentId } = await req.json();

  try {
    await connectToDB();

    if (!studentId) {
      return NextResponse.json(
        { error: "Student ID is required" },
        { status: 400 }
      );
    }

    const student = await Student.findById(studentId);
    if (!student) {
      return NextResponse.json({ error: "Student not found" }, { status: 404 });
    }

    student.isVerified = true;
    await student.save();

    return NextResponse.json(
      { message: "Student verified successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
