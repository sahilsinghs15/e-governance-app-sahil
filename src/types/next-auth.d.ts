// src/types/next-auth.d.ts
import "next-auth";
import { getServerSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string | null;
      username: string | null;
      role: string;
    };
    
  }
  interface StudentData {
    admitted: boolean;
    // Add other properties as needed
    name?: string;
    email?: string;
    course?: string;
  }

 
  interface JWT {
    id: string;
    email: string | null;
    username: string | null;
    role: string;
  }
}
