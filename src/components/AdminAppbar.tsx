"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AdminAppbar = () => {
  const router = useRouter();

  const routerHandler = (path: string) => {
    router.push(path);
  };

  const handleLogout = async () => {
    try {
      await signOut({
        callbackUrl: "/signin",
      });
      toast.success("Logged out successfully!");
    } catch (error) {
      toast.error("Failed to log out. Please try again.");
    }
  };

  return (
    <div className="h-12 w-full flex items-center justify-between border-b border-gray-500 pl-10 pr-10 pb-2">
      <div
        className="text-2xl font-bold text-blue-600 hover:cursor-pointer"
        onClick={() => routerHandler("/admin")}
      >
        Admin Dashboard
      </div>
      <div className="flex gap-6 text-white">
        <div
          className="hover:cursor-pointer hover:underline"
          onClick={() => routerHandler("/admin/lists")}
        >
          Student Lists
        </div>
        <div
          className="hover:cursor-pointer hover:underline"
          onClick={() => routerHandler("/admin/settings")}
        >
          Settings
        </div>
        <div
          className="hover:cursor-pointer hover:underline"
          onClick={() => routerHandler("/admin/reports")}
        >
          Reports
        </div>
        <div
          className="hover:cursor-pointer hover:underline"
          onClick={handleLogout}
        >
          Logout
        </div>
      </div>
    </div>
  );
};

export default AdminAppbar;
