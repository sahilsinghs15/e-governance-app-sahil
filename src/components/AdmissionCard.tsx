
"use client";

import React from "react";

interface StudentDetails {
  name: string;
  email: string;
  phone: number;
  dob: string;
  gender: string;
  course: string;
  rollNo?: string;
  admitted?: boolean;
}

interface ApplicationCardProps {
  application: StudentDetails;
}

const ApplicationCard: React.FC<ApplicationCardProps> = ({ application }) => (
  <div className="text-white font-bold border-2 border-zinc-200 shadow-md rounded-lg p-6 flex gap-6 items-center h-56">
    <img
      src={`https://avatar.iran.liara.run/public/boy?username=${application.name}`}
      alt="Student"
      className="w-32 h-32 rounded-full object-cover border-4 border-gray-700"
    />
    <div>
      <h2 className="text-xl text-black font-medium mb-2">
        {application.name || "N/A"}
      </h2>
      <p className="text-gray-300 mb-1">Email: {application.email || "N/A"}</p>
      <p className="text-gray-300 mb-1">Phone: {application.phone || "N/A"}</p>
      <p className="text-gray-300 mb-1">DOB: {application.dob || "N/A"}</p>
      <p className="text-gray-300 mb-1">
        Gender: {application.gender || "N/A"}
      </p>
      <p className="text-gray-300 mb-1">
        Course: {application.course || "N/A"}
      </p>
      <p className="mt-2 text-white gap-2">
        Admission Status :{" "}
        <span
          className={application.admitted ? "text-green-500" : "text-red-600"}
        >
          {application.admitted ? " Admitted" : " Pending"}
        </span>
      </p>

      {application.admitted && (
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg">
          Pay the fee for the course
        </button>
      )}
    </div>
  </div>
);



interface YourApplicationPageProps {
  application: StudentDetails | null;
}

const YourApplicationPage: React.FC<YourApplicationPageProps> = ({
  application,
}) => {
  if (!application) {
    return (
      <div className="text-white text-center">
        No application data available
      </div>
    );
  }

  return (
    <div className="h-96 text-white py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <ApplicationCard application={application} />
      </div>
    </div>
  );
};

export default YourApplicationPage;

