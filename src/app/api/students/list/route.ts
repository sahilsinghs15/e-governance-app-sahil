import { NextResponse } from "next/server";
import { connectToDB } from "@/db/mongo";
import Student_Registration from "@/models/Student_Registration";

export async function GET(req: Request) {
  try {
    await connectToDB();

    const students = await Student_Registration.find({});
    return NextResponse.json(students, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
