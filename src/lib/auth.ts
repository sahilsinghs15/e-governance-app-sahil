import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { Student } from "@/models/Student";
import { connectToDB } from "@/db/mongo";

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt", // Ensure the type matches SessionStrategy
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }

        await connectToDB();

        const student = await Student.findOne({ email: credentials.email });
        if (!student) {
          throw new Error("No user found with the provided email");
        }

        const isValidPassword = await bcrypt.compare(
          credentials.password,
          student.password
        );
        if (!isValidPassword) {
          throw new Error("Invalid password");
        }

        return {
          id: student._id,
          email: student.email,
          name: student.name,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    // signUp: "/auth/signup",
    error: "/auth/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
