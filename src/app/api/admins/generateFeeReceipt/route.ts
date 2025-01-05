import { NextResponse } from "next/server";

import { connectToDB } from "@/db/mongo";
import Student_Registration from "@/models/Student_Registration";

export async function POST(req: Request) {
  const { studentId, amount, description } = await req.json();

  try {
    await connectToDB();

    if (!studentId || !amount || !description) {
      return NextResponse.json(
        { error: "Student ID, amount, and description are required" },
        { status: 400 }
      );
    }

    const student = await Student_Registration.findById(studentId);
    if (!student) {
      return NextResponse.json({ error: "Student not found" }, { status: 404 });
    }

    const feeReceipt = {
      description,
      amount,
      date: new Date(),
    };

    if (!student.feeReceipts) student.feeReceipts = [];
    student.feeReceipts.push(feeReceipt);

    await student.save();

    return NextResponse.json(
      { message: "Fee receipt generated successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
