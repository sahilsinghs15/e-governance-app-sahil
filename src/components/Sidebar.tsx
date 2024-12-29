"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Sidebar Button */}
      <div
        onClick={toggleSidebar}
        className="p-2 text-white bg-[#100c14] rounded-md focus:outline-none border-r border-gray-600 h-full hover:cursor-pointer flex justify-center items-center "
      >
        {isOpen ? "Close" : "Menu"}
      </div>

      {/* Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-64 h-full bg-[#100c14] text-white shadow-lg z-50"
      >
        <div className="p-4">
          <h2 className="text-2xl font-semibold">Menu</h2>
        </div>
        <nav className="flex flex-col gap-4 p-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/services" className="hover:underline">
            Services
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>
      </motion.div>

      {/* Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default Sidebar;
