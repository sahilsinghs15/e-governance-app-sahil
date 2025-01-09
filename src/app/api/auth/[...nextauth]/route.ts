import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth";


const Handler = NextAuth(authOptions);
export { Handler as GET , Handler as POST };