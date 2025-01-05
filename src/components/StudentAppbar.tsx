"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Account from "./Account";

const StudentAppbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const routerHandler = (path: string) => {
    router.push(path);
  };

  return (
    <div className="h-12 w-full flex items-center justify-between border-b border-gray-600 pl-10 pr-10 pb-2">
      <div
        className="bg-gradient-to-b text-2xl pl-4 from-blue-400 to-blue-700 bg-clip-text pr-1 font-black flex justify-center items-center gap-2 tracking-tighter text-transparent hover:cursor-pointer"
        onClick={() => routerHandler("/")}
      >
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-8"
          alt="E-Governance"
        />
        <h2>E-Governance</h2>
      </div>

      <div className="text-white flex justify-evenly items-center gap-6">
        <div
          className="hover:cursor-pointer hover:underline"
          onClick={() => routerHandler("/home")}
        >
          Home
        </div>
        <div
          className="hover:cursor-pointer hover:underline"
          onClick={() => routerHandler("/admission")}
        >
          Admission
        </div>
        <div
          className="hover:cursor-pointer hover:underline"
          onClick={() => routerHandler("/academics")}
        >
          Academics
        </div>
        <div
          className="hover:cursor-pointer hover:underline"
          onClick={() => routerHandler("/programs")}
        >
          Programs
        </div>
        <div
          className="hover:cursor-pointer hover:underline"
          onClick={() => routerHandler("/department")}
        >
          Department
        </div>
        <div
          className="hover:cursor-pointer hover:underline"
          onClick={() => routerHandler("/student")}
        >
          Students
        </div>
        <div
          className="hover:cursor-pointer hover:underline"
          onClick={() => routerHandler("/contact-us")}
        >
          Contact Us
        </div>
      </div>

      <div className="flex justify-center items-center gap-5">
        <div className="m-3">
          <Account />
        </div>
      </div>
    </div>
  );
};

export default StudentAppbar;
