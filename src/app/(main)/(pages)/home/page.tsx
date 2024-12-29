import { Appbar } from "@/components/Appbar";
import { Greeting } from "@/components/Greeting";
import Sidebar from "@/components/Sidebar";

import { getServerSession } from "next-auth";

export default async function Home() {
  //   const session = await getServerSession();

  //   if (!session?.user) {
  //     return <Redirect to={"/signin"} />;
  //   }

  return (
    <div className="bg-[#100c14] min-h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col gap-6 mt-3">

        <div className="w-full">
          <Appbar />
        </div>

        {/* Page Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-extrabold capitalize tracking-tighter md:text-4xl text-white p-3 ">
            <Greeting /> Piyush
            {/* {session.user.name} */}
          </h1>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-md pl-3 ml-3">
          {/* Add your main content here */}
          <p className="text-gray-700">This is your  page content.</p>
        </div>
      </main>
    </div>
  );
}