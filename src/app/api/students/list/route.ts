import { NextResponse } from "next/server";
import { Student } from "@/models/User";
import { connectToDB } from "@/db/mongo";

export async function GET(req: Request) {
  try {
    await connectToDB();

    const students = await Student.find({});
    return NextResponse.json(students, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
