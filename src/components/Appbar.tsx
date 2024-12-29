"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Modal } from "./ui/modal";

export const Appbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="h-12 w-full flex items-center justify-between border-b border-gray-600 px-32 py-4">
      {/* Title */}
      <div className="bg-gradient-to-b text-2xl pl-4 from-blue-400 to-blue-700 bg-clip-text pr-1 font-black tracking-tighter text-transparent hover:cursor-pointer">
        E-Governance
      </div>

      {/* Join Button */}
      <div className="pr-40 m-3">
        <Button onClick={handleOpenModal} variant="outline" size="sm">
          Join
        </Button>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};
