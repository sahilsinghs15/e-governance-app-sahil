// admins/funds/addfunds

import { NextResponse } from "next/server";
import { connectToDB } from "@/db/mongo";
import Wallet from "@/models/Wallet";

export async function POST(req: Request) {
  try {
    await connectToDB();
    const { studentId, amount } = await req.json();
    if (!studentId || !amount) {
      return NextResponse.json(
        {
          error: "student id and amount are required",
        },
        { status: 400 }
      );
    }

    if (typeof amount !== "number" || amount <= 0) {
      return NextResponse.json(
        {
          error: "A valid positive amount is required",
        },
        { status: 400 }
      );
    }

    const wallet = await Wallet.findOneAndUpdate(
      { studentId },
      { $inc: { balance: amount } },
      { new: true }
    );

    if (!wallet) {
      return NextResponse.json(
        {
          error: "wallet not found for the student",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "funds added successfully",
        updatedBalance: wallet.balance,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error: "internal server error",
      },
      { status: 500 }
    );
  }
}
