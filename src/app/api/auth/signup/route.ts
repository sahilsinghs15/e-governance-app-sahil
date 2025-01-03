import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { Student } from "@/models/Student";
import { connectToDB } from "@/db/mongo";

export async function POST(req: Request) {
  try {
    const { username , email, password } = await req.json();

    if (!username ||!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    await connectToDB();

    const existingUser = await Student.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Student({ username , email, password: hashedPassword });
    await newUser.save();

    return NextResponse.json(
      { message: "User created successfully" },
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
