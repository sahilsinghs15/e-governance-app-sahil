import { Greeting } from "@/components/Greeting";
import HeroSection from "@/components/HeroSection";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin"); // Redirect if no session
  }

  const { role } = session.user;

  if (role !== "Student") {
    redirect("/admin"); // Redirect non-students to the admin dashboard
  }

  // Render Student Home Page
  return (
    <div className="bg-[#100c14] min-h-screen flex">
      <main className="flex-1 flex flex-col gap-6 mt-3">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-extrabold capitalize tracking-tighter md:text-4xl text-white p-3 pl-6">
            <Greeting />
          </h1>
        </div>
        <div className="flex-1 flex flex-col gap-4 p-4 shadow-md pl-3 ml-3">
          <HeroSection />
        </div>
      </main>
    </div>
  );
}
