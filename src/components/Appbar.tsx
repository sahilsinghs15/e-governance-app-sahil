"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Modal } from "./ui/modal";
import  Account  from "./Account"

export const Appbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="h-12 w-full flex items-center justify-between border-b border-gray-600 pl-10 pr-10 pb-2 ">
      {/* Title */}
      <div className="bg-gradient-to-b text-2xl pl-4 from-blue-400 to-blue-700 bg-clip-text pr-1 font-black flex justify-center items-center gap-2 tracking-tighter text-transparent hover:cursor-pointer">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-8"
          alt="E-Governance"
        />
        <h2>E-Governance</h2>
      </div>

      {/* Join Button */}
      <div className="flex justify-center items-center gap-5">
        <div className="pr-30 m-3">
          <Button onClick={handleOpenModal} variant="outline" size="sm">
            Join
          </Button>
        </div>

        <div className="m-3">
          <Account />
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};
