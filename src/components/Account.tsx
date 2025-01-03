"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { FaSignOutAlt, FaWallet } from "react-icons/fa";
import { Redirect } from "./Redirect";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
const Account = () => {
  const  [ openMenu , setMenuOpen ] = useState(false);
  const router = useRouter();

  const menuToggle =() => {
    setMenuOpen( prev => !prev);
  }

  const handleLogout = async () => {
    try {
      // Display a success toast message
      toast.success("Logged out successfully!");

      // Perform sign out using next-auth
      await signOut({
        callbackUrl: "/signin", // Redirects the user to the signin page after logout
      });
    } catch (error) {
      // Handle logout errors if any
      toast.error("Failed to log out. Please try again.");
    }
  };

  const walletHandler =  () => {
    router.push("/wallet");
    toast.success("Opened wallet");
    // <Redirect to="/wallet"/>

  }

  return (
    <div className="relative">
      {/* Profile Picture */}
      <div
        className="w-12 h-12 rounded-full bg-gray-300 cursor-pointer overflow-hidden border-2 border-gray-400"
        onClick={menuToggle}
      >
        <img
        //   src="/profile-picture.jpg" // Replace with your dynamic profile picture URL
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dropdown Menu */}
      {openMenu && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
          {/* Wallet Option */}
          <button
            className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={walletHandler}
          >
            <FaWallet className="mr-2" />
            Wallet
          </button>
          <hr className="my-1 border-gray-200" />
          {/* Logout Option */}
          <button
            className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={handleLogout}
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Account;
