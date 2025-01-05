import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";
import AdminHome from "@/components/AdminHome";

const Page = async () => {
  const session = await getSession();

  // Check if the user is authenticated and authorized
  if (
    !session ||
    (session.user.role !== "AdmissionAdmin" &&
      session.user.role !== "SuperAdmin")
  ) {
    redirect("/unauthorized"); // Redirect unauthorized users to an error page
    return null;
  }

  return (
    <div>
      <AdminHome />
    </div>
  );
};

export default Page;
