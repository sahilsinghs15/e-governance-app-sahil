import { Greeting } from "@/components/Greeting";
import HeroSection from "@/components/HeroSection";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  // const session = await getServerSession(authOptions);

  // if (!session) {
  //   redirect("/signin"); 
  // }

  // const { role } = session.user;

  // const username  = session.user.username;

  // if (role !== "Student") {
  //   redirect("/admin"); 
  // }


  const session = await getServerSession(authOptions);

  if(!session){
    redirect("/signin");
  }

  const { role }  = session.user;
  const username = session?.user.username
  if(role !=="Student") {
    redirect("/admin");
  }
  
  return (
    // <div className="bg-[#100c14] min-h-screen flex">
    //   <main className="flex-1 flex flex-col gap-6 mt-3">
    //     <div className="flex items-center justify-between">
    //       <h1 className="text-3xl font-extrabold capitalize tracking-tighter md:text-4xl text-white p-3 pl-6">
    //         <Greeting /> {username}
    //       </h1>
    //     </div>
    //     <div className="flex-1 flex flex-col gap-4  shadow-md ">
    //       <HeroSection />
    //     </div>
    //   </main>
    // </div>

    <div className="bg-[#111c14] min-h-screen flex">
      <main className="flex-1 flex flex-col gap-6 mt-3">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl font-extrabold capitalize tracking-tighter md:text-4xl text-white p-3 pl-6">
            <Greeting/> {username}
          </h1>
        </div>
        <div className="flex-1 flex flex-col gap-4 shadow-md">
          <HeroSection/>
        </div>
      </main>
    </div>
  );
}
