// /admins/fetchreceipt

import { connectToDB } from "@/db/mongo";
import { authOptions } from "@/lib/auth";
import Receipt from "@/models/FeeReceipt";
import Student from "@/models/Student_Registration";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized " }, { status: 401 });
    }

    const studentId = await Student.findById(session.user.id);
    if (!studentId) {
      return NextResponse.json({ error: "student not found" }, { status: 404 });
    }

    const feeReciept = await Receipt.findById(studentId);
    if (!feeReciept) {
      return NextResponse.json(
        {
          error: "receipt not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({ feeReciept }, { status: 200 });
  } catch (error) {
    console.error("error processing the request : ", error);
    return NextResponse.json(
      {
        error: "internal server error",
      },
      { status: 500 }
    );
  }
}
