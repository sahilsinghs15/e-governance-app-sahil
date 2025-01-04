"use client";

import React, { useState } from "react";
import { Modal } from "./ui/modal";

const AdmissionsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-800 via-indigo-800 to-blue-800 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to Admissions</h1>
        <p className="text-lg max-w-3xl mb-10">
          Start your academic journey with us. Explore our wide range of courses
          and unlock your potential. Begin by filling out our admission form
          today!
        </p>
        <button
          onClick={toggleModal}
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg text-lg"
        >
          Fill Admission Form
        </button>
      </section>

      {/* Open Modal */}
      <div className="">
        <Modal isOpen={isModalOpen} onClose={toggleModal} />
      </div>
    </div>
  );
};

export default AdmissionsPage;
