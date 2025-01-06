import { redirect } from "next/navigation";

export function redirectBasedOnRole(role: string) {
  switch (role) {
    case "AdmissionAdmin":
    case "SuperAdmin":
      redirect("/admin");
      break;
    case "Student":
      redirect("/home");
      break;
    default:
      redirect("/signin"); // Fallback for unexpected roles
  }
}
