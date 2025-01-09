import { connectToDB } from "@/db/mongo";
import Student from "@/models/Student_Registration";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();
    const studentForm = await Student.find({}, "-__v");

    return NextResponse.json({
      message: "Succesfuly fetch submitt form",
      status: 201,
      students: studentForm, // Include all students in the response
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      error: "Errors fetching form data",
      status: 505,
    });
  }
}
