"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  FaBook,
  FaDesktop,
  FaChalkboardTeacher,
  FaFlask,
  FaFutbol,
  FaUserGraduate,
  FaUniversity,
  FaHandshake,
  FaBookOpen,
  FaChalkboard,
  FaTrophy,
  FaDollarSign,
  FaCheckCircle,
} from "react-icons/fa";


const MotionCard = ({ icon, title }: { icon?: string; title: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg text-center border border-blue-200 hover:border-blue-400 transition-all"
  >
    {icon && <div className="text-5xl mb-4">{icon}</div>}
    <p className="font-medium text-gray-700">{title}</p>
  </motion.div>
);


const facilities = [
  {
    title: "Digital Library",
    description:
      "24/7 access to digital resources, e-books, and research papers.",
    icon: <FaBook />,
  },
  {
    title: "Computer Labs",
    description:
      "Modern computing facilities with high-speed internet connectivity.",
    icon: <FaDesktop />,
  },
  {
    title: "Smart Classrooms",
    description:
      "Interactive digital boards and multimedia learning facilities.",
    icon: <FaChalkboardTeacher />,
  },
  {
    title: "Research Centers",
    description:
      "Specialized labs and research facilities for advanced studies.",
    icon: <FaFlask />,
  },
  {
    title: "Sports Complex",
    description:
      "Indoor and outdoor sports facilities for physical activities.",
    icon: <FaFutbol />,
  },
  {
    title: "Student Support Center",
    description: "Dedicated support for academic and personal guidance.",
    icon: <FaUserGraduate />,
  },
];

const facts = [
  {
    title: "Students Enrolled",
    value: "10,000",
    icon: <FaUserGraduate className="text-4xl text-blue-600" />,
  },
  {
    title: "Courses Offered",
    value: "50",
    icon: <FaBook className="text-4xl text-purple-600" />,
  },
  {
    title: "Faculty Members",
    value: "200",
    icon: <FaChalkboardTeacher className="text-4xl text-orange-600" />,
  },
  {
    title: "Placement Rate %",
    value: "95",
    icon: <FaCheckCircle className="text-4xl text-green-600" />,
  },
];

const admissionCards = [
  {
    title: "First Year",
    subtitle: "Undergraduate Program",
    points: ["Online Application", "Document Upload", "Merit-based Admission"],
    bgColor: "bg-blue-500",
    buttonColor: "bg-blue-600",
  },
  {
    title: "Second Year",
    subtitle: "Undergraduate Program",
    points: ["Direct Admission", "Previous Records", "Transfer Cases"],
    bgColor: "bg-purple-500",
    buttonColor: "bg-purple-600",
  },
  {
    title: "Third Year",
    subtitle: "Undergraduate Program",
    points: [
      "Final Year Entry",
      "Specialization Selection",
      "Project Assignment",
    ],
    bgColor: "bg-green-500",
    buttonColor: "bg-green-600",
  },
  {
    title: "PG First Year",
    subtitle: "Postgraduate Program",
    points: ["Advanced Studies", "Research Orientation", "Specialized Tracks"],
    bgColor: "bg-red-500",
    buttonColor: "bg-red-600",
  },
  {
    title: "PG Second Year",
    subtitle: "Postgraduate Program",
    points: ["Thesis Work", "Research Project", "Industry Integration"],
    bgColor: "bg-blue-700",
    buttonColor: "bg-blue-800",
  },
];

const HeroSection = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-[#171717] text-white py-16 pt-4 sm:py-20  ">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center max-w-4xl"
        >
          <h1 className="text-4xl  sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Welcome to the <span className="text-blue-700">E-Governance</span>{" "}
            Platform
          </h1>
          <p className="mt-6 text-lg sm:text-xl lg:text-2xl leading-relaxed">
            Empowering institutions with efficient admissions, academics, and
            resources management for a seamless experience.
          </p>

          {/* Button */}
          <div className="gap-3 space-x-3">
            <motion.button
              onClick={() => router.push("/admission")}
              whileHover={{ scale: 1.1 }}
              className="mt-8 px-8 py-4 bg-[#2563eb] text-white font-semibold rounded-2xl shadow-lg hover:bg-blue-800-900 transition-all"
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

          {/* Cards */}

          <div className="mt-8 flex px-36 items-center gap-8 space-x-8 justify-center">
            {/* 24/7 Online Access */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="h-32 bg-[#262626] border border-gray-600  w-36 flex flex-col items-center justify-center py-6 rounded-lg shadow-lg"
            >
              <h1 className="text-3xl text-[#3b82f6] font-bold">24/7</h1>
              <p className="pt-2 text-white">Online Access</p>
            </motion.div>

            {/* 100% Digital Process */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="h-32 bg-[#262626] border border-gray-600  w-36 flex flex-col items-center justify-center py-6 rounded-lg shadow-lg"
            >
              <h1 className="text-3xl text-purple-500 font-bold">100%</h1>
              <p className="pt-2 text-white">Digital Process</p>
            </motion.div>

            {/* Fast Processing */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="h-32 bg-[#262626] border border-gray-600  w-36 flex flex-col items-center justify-center py-6 rounded-lg shadow-lg"
            >
              <h1 className="text-3xl text-green-500 font-bold">Fast</h1>
              <p className="pt-2 text-white">Processing</p>
            </motion.div>
          </div>

          {/* Animated Drop Arrow */}
          <div className="flex justify-center mt-16">
            <motion.div
              onClick={() => window.scrollTo(100, 100)}
              className="text-white text-3xl animate-bounce hover:cursor-pointer"
              initial={{ y: 0 }}
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 1,
              }}
            >
              ↓
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="bg-white py-16 px-6 sm:px-12 lg:px-24">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Welcome to Our Digital Campus
          </h1>
          <p className="mt-4 text-gray-600">
            Experience seamless education management through our comprehensive
            e-governance platform
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Digital Learning */}
          <div className="bg-[#fafafa] shadow-md rounded-lg p-6  text-center hover:shadow-2xl">
            <div className="flex items-center justify-center h-12 w-12 mx-auto bg-blue-100 rounded-full ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h2m8-16h2a2 2 0 012 2v12a2 2 0 01-2 2h-2M8 4v16m8-16v16M8 8h8m-8 4h8m-8 4h8"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-800">
              Digital Learning
            </h3>
            <p className="mt-2 text-gray-600">
              Access course materials, assignments, and resources anytime,
              anywhere through our digital platform.
            </p>
          </div>

          {/* Easy Applications */}
          <div className="bg-[#fafafa] shadow-md rounded-lg p-6 text-center hover:shadow-2xl">
            <div className="flex items-center justify-center h-12 w-12 mx-auto bg-purple-100 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6 text-purple-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m2 4H7m3-8h4m1 12h-8a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-800">
              Easy Applications
            </h3>
            <p className="mt-2 text-gray-600">
              Streamlined admission process with easy-to-fill forms and quick
              application tracking.
            </p>
          </div>

          {/* Student Support */}
          <div className="bg-[#fafafa] shadow-md rounded-lg p-6 text-center hover:shadow-2xl">
            <div className="flex items-center justify-center h-12 w-12 mx-auto bg-green-100 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a6 6 0 00-9.33-5M9 12h6m2-4H7m3 8h4M3 20h5v-2a6 6 0 00-9.33-5M17 9h5V7a6 6 0 00-9.33-5M9 3h6m2 4H7m3 8h4M3 9h5V7a6 6 0 00-9.33-5"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-800">
              Student Support
            </h3>
            <p className="mt-2 text-gray-600">
              24/7 support system to help you with queries and technical
              assistance throughout your journey.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center mt-12">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg font-medium shadow-md">
            Begin Your Journey
          </button>
        </div>
      </section>

      {/* Admissions Section */}
      <section className="py-12 px-4 sm:px-10 border-t border-gray-300 bg-[#f5f5f5]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Admission Forms
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Choose your course level and start your application process
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {admissionCards.map((card, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <div
                  className={`p-4 ${card.bgColor} text-white text-center font-bold`}
                >
                  {card.title}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {card.subtitle}
                  </h3>
                  <ul className="mt-2 mb-4 space-y-2">
                    {card.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-center text-gray-600 space-x-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-5 w-5 text-green-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-2 px-4 text-white font-semibold rounded ${card.buttonColor} hover:opacity-90`}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
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
      <section className="py-12 px-4 sm:px-10 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Campus Facilities
          </h2>
          <p className="text-gray-600 mb-8">
            State-of-the-art facilities to enhance your learning experience
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow"
              >
                <div className="text-blue-600 text-4xl mb-4">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {facility.title}
                </h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Schedule a Campus Tour
            </button>
          </div>
        </div>
      </section>

      {/* Facts Section */}
      <section className="py-12 px-4 sm:px-10 bg-[#171717] border-t border-red-300">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Our Proud Facts
          </h2>
          <p className="text-gray-400 mb-8">
            Celebrating our achievements and milestones in academic excellence
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facts.map((fact, index) => (
              <div
                key={index}
                className="bg-[#262626] p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <div className="mb-4 flex justify-center items-center">
                  {fact.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {fact.value}
                </h3>
                <p className="text-gray-400">{fact.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
