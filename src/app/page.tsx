import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
// Ensure the path is correct for your project setup

export default async function Page() {
  // Fetch the user's session
  const session = await getServerSession(authOptions);

  if (session?.user) {
    const { role } = session.user;

    // Redirect based on user role
    switch (role) {
      case "Student":
        redirect("/home"); // Replace '/home' with your student home route
        break;
      case "AdmissionAdmin":
      case "SuperAdmin":
        redirect("/admin"); // Replace '/admin' with your admin dashboard route
        break;
      default:
        // Handle any unexpected roles or unauthorized access
        redirect("/unauthorized"); // Replace '/unauthorized' with an appropriate route
        break;
    }
  } else {
    // Redirect to the sign-in page if the user is not logged in
    redirect("/signin"); // Replace '/signin' with your actual sign-in route
  }

  // Since `redirect` terminates the request, this won't execute
  return null;
}
