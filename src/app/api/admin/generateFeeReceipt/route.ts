//admins/generateFeeReceipt

import { NextResponse } from "next/server";
import Student from "@/models/Student_Registration";
import { connectToDB } from "@/db/mongo";
import Receipt from "@/models/FeeReceipt";

export async function POST(req: Request) {
  try {
    await connectToDB();
    const { studentId, amount, description } = await req.json();

    if (!studentId || !amount || !description) {
      return NextResponse.json(
        {
          error: "Student id , amount , and description are required",
        },
        { status: 400 }
      );
    }

    const student = await Student.findById(studentId);
    if (!student) {
      return NextResponse.json({ error: "student not found" }, { status: 404 });
    }

    const feeReceipt = new Receipt({
      studentId,
      amount,
      description,
    });

    await feeReceipt.save();

    return NextResponse.json(
      {
        message: "fee receipt generated successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}
