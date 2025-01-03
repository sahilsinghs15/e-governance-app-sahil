import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { Student } from "@/models/Student";
import { connectToDB } from "@/db/mongo";

export const authOptions: AuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username : { label : "Username" , type : "text"},
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username ||!credentials?.email || !credentials?.password) {
          throw new Error("Missing username , email or password");
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

        return { id: student._id, email: student.email, username: student.username };
      },
    }),
  ],
  pages: { signIn: "/auth/signin", error: "/auth/signin" },
  secret: process.env.NEXTAUTH_SECRET,
};
