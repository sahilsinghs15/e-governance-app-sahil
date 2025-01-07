import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import { connectToDB } from "@/db/mongo";

export const authOptions: AuthOptions = {
  session: { strategy: "jwt" },
  providers: [
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

        // Connect to the database
        await connectToDB();

        // Find the user in the database
        const user = await User.findOne({ email: credentials.email });

        if (!user) {
          throw new Error("No user found with the provided email");
        }

        // Validate the password
        const isValidPassword = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isValidPassword) {
          throw new Error("Invalid password");
        }

        // Check if the user has a valid role
        const validRoles = ["Student", "AdmissionAdmin", "SuperAdmin"];
        if (!validRoles.includes(user.role)) {
          throw new Error("Unauthorized role");
        }

        // Return the user object
        return {
          id: user._id.toString(),
          email: user.email,
          username: user.username || null,
          role: user.role,
        };
      },
    }),
  ],
  pages: {
    signIn: "/signin",
    error: "/signin", // Customize this page as needed
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email ?? null;
        //@ts-ignore
        token.username = user.username ?? null;
        //@ts-ignore
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.id as string,
        email: token.email ?? null,
        username: (token.username as string) ?? null,
        role: token.role as string,
      };
      return session;
    },
  },
};
