"use client";

import React, { useEffect, useState } from "react";

const ApplicationCard = ({ application }: { application: any }) => {
  return (
    <div className="bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center md:items-start  md:h-64 transition-transform  hover:shadow-xl">
      {/* Avatar Section */}
      <div className="flex-shrink-0">
        <img
          src={`https://avatar.iran.liara.run/public/boy?username=${application.name}`}
          alt="Student"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-gray-700 mx-auto"
        />
      </div>

      {/* Information Section */}
      <div className="text-center md:text-left">
        <h2 className="text-2xl text-white font-semibold mb-3">
          {application.name || "N/A"}
        </h2>
        <p className="text-gray-300 text-sm md:text-base mb-1">
          <span className="font-medium text-gray-400">Email: </span>
          {application.email || "N/A"}
        </p>
        <p className="text-gray-300 text-sm md:text-base mb-1">
          <span className="font-medium text-gray-400">Phone: </span>
          {application.phone || "N/A"}
        </p>
        <p className="text-gray-300 text-sm md:text-base mb-1">
          <span className="font-medium text-gray-400">DOB: </span>
          {application.dob || "N/A"}
        </p>
        <p className="text-gray-300 text-sm md:text-base mb-1">
          <span className="font-medium text-gray-400">Gender: </span>
          {application.gender || "N/A"}
        </p>
        <p className="text-gray-300 text-sm md:text-base">
          <span className="font-medium text-gray-400">Course: </span>
          {application.course || "N/A"}
        </p>
      </div>
    </div>
  );
};

const YourApplicationPage = () => {
  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch("/api/students/getStudent");
        if (!response.ok) {
          const errorData = await response.json();
          setError(errorData.error || "Failed to fetch data");
          return;
        }
        const data = await response.json();
        setApplication(data || {});
      } catch (err) {
        setError("An error occurred while fetching data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStudentData();
  }, []);

  if (loading) {
    return <div className="text-white text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="min-h-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gradient">
          Student Application
        </h1>
        <ApplicationCard application={application} />
      </div>
    </div>
  );
};

export default YourApplicationPage;
