import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    email: string;
    username: string;
  }

  interface Session {
    user: {
      id: string;
      email: string | null;
      username: string | null;
    };
  }
}
