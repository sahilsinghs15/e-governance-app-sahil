import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function Page() {
  // Fetch the user's session
  const session = await getServerSession();

  // If there's a session, redirect based on   role
  if (session) {
    const { role } = session.user;

    if (role === "Student") {
      redirect("/home"); // Replace '/home' with your student home route
    } else if (role === "AdmissionAdmin" || role === "SuperAdmin") {
      redirect("/admin"); // Replace '/admin-dashboard' with the admin dashboard route
    }
  }

  // If the user is not logged in, redirect to the sign-in page
  redirect("/signin"); // Replace '/signin' with your actual sign-in route

  // This return is not reached due to the redirects above but is required for the component.
  return null;
}
