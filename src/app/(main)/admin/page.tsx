import AdminHome from "@/components/AdminHome";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin"); // Redirect if no session
  }

  const { role } = session.user;

  if (role === "Student") {
    redirect("/home"); // Redirect students to their home page
  }

  // Render Admin dashboard for authorized users
  return (
    <div>
      <AdminHome />
    </div>
  );
}