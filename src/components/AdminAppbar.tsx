"use client";

import { useRouter } from "next/navigation";

const AdminAppbar = () => {
  const router = useRouter();

  const routerHandler = (path: string) => {
    router.push(path);
  };

  return (
    <div className="h-12 w-full flex items-center justify-between border-b border-gray-600 pl-10 pr-10 pb-2">
      <div
        className="text-2xl font-bold text-blue-600 hover:cursor-pointer"
        onClick={() => routerHandler("/admin/dashboard")}
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
      </div>
    </div>
  );
};

export default AdminAppbar;
