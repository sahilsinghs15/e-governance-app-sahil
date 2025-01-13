"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const MotionCard = ({ icon, title }: { icon?: string; title: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg text-center border border-blue-200 hover:border-blue-400 transition-all"
  >
    {icon && <div className="text-5xl mb-4">{icon}</div>}
    <p className="font-medium text-gray-700">{title}</p>
  </motion.div>
);

const HeroSection = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-500 text-white py-16 px-4 sm:py-20 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center max-w-4xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Welcome to the <span className="text-yellow-300">E-Governance</span>{" "}
            Platform
          </h1>
          <p className="mt-6 text-lg sm:text-xl lg:text-2xl leading-relaxed">
            Empowering institutions with efficient admissions, academics, and
            resources management for a seamless experience.
          </p>
          <div className="gap-3 space-x-3">
            <motion.button
              onClick={() => router.push("/admission")}
              whileHover={{ scale: 1.1 }}
              className="mt-8 px-8 py-4 bg-yellow-300 text-gray-800 font-semibold rounded-2xl shadow-lg hover:bg-yellow-400 transition-all"
            >
              Get Started
            </motion.button>
            <motion.button
              onClick={() => router.push("/admission")}
              whileHover={{ scale: 1.1 }}
              className="mt-8 px-8 py-4 bg-transparent hover:bg-white border-white border-2 text-white hover:text-gray-800 font-semibold rounded-2xl shadow-lg transition-all"
            >
              Learn more
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Admissions Section */}
      <section className="py-12 px-4 sm:px-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
            Admissions
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {["FY", "SY", "TY", "PG 1", "PG 2"].map((year, index) => (
              <MotionCard key={index} title={year} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Academics Section */}
      <section className="py-12 px-4 sm:px-10 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-600 mb-8">
            Academics
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {[
              { name: "UG Program", icon: "🎓" },
              { name: "PG Program", icon: "🎓" },
              { name: "SFC Program", icon: "💰" },
              { name: "Certificate Courses", icon: "📜" },
              { name: "Fee Structure", icon: "💳" },
              { name: "Time Table", icon: "📅" },
              { name: "Prospectus", icon: "📖" },
              { name: "Examination", icon: "📝" },
            ].map((academic, index) => (
              <MotionCard
                key={index}
                title={academic.name}
                icon={academic.icon}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-12 px-4 sm:px-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-600 mb-8">
            Facilities & Resources
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {[
              "Laboratories",
              "Physical Education",
              "Seminar Hall",
              "Classrooms",
              "Library",
              "Green Campus",
              "N.C.C.",
              "N.S.S.",
            ].map((facility, index) => (
              <MotionCard key={index} title={facility} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Facts Section */}
      <section className="py-12 px-4 sm:px-10 bg-gradient-to-r from-yellow-100 to-yellow-200">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-yellow-600 mb-8">
            Proud Facts
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {[
              "Total Departments",
              "Associations",
              "Research & Publications",
              "Workshops/Seminars Organized",
              "Awards & Recognitions",
              "Grants Received",
            ].map((fact, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-yellow-300 p-6 rounded-xl text-center shadow-lg hover:shadow-2xl transition-all"
              >
                <p className="font-medium text-gray-800">{fact}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
