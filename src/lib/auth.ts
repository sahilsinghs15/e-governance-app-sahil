import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { Student } from "@/models/Student";
import { connectToDB } from "@/db/mongo";
import JWT from "next-auth/jwt"; // Import JWT utilities

export const authOptions: AuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          !credentials?.username ||
          !credentials?.email ||
          !credentials?.password
        ) {
          throw new Error("Missing username, email, or password");
        }

        await connectToDB();
        const student = await Student.findOne({
          email: credentials.email,
          username: credentials.username,
        });

        if (!student) {
          throw new Error(
            "No user found with the provided email and username combination"
          );
        }

        const isValidPassword = await bcrypt.compare(
          credentials.password,
          student.password
        );
        if (!isValidPassword) {
          throw new Error("Invalid password");
        }

        // Return the user object (including their id and email) to be used by JWT
        return {
          id: student._id.toString(),
          email: student.email,
          username: student.username,
        };
      },
    }),
  ],
  pages: { signIn: "/signin", error: "/signin" },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // Here we will generate a JWT after a successful sign-in
    async jwt({ token, user }) {
      if (user) {
        // Add user information to the token
        token.id = user.id as string; // Ensure id is typed correctly as a string
        token.email = user.email as string | null; // Ensure email is typed as string or null
        token.username = user.username as string | null; // Ensure username is typed as string or null
      }
      return token; // Return the token (which will contain the JWT)
    },
    // Optional: Add a callback to handle session if needed
    async session({ session, token }) {
      session.user.id = token.id as string;
      session.user.email = token.email as string | null; // Ensure it's string or null
      session.user.username = token.username as string | null; // Ensure it's string or null
      return session;
    },
  },
};
