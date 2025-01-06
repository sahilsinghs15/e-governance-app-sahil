import AdminHome from "@/components/AdminHome";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await getServerSession();

  if (!session) {
    redirect("/signin"); // Redirect if no session
  }

  // Render Admin dashboard for authorized users
  return (
    <div>
      <AdminHome />
    </div>
  );
}
