"use client";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ApplicationCard = ({
  application,
  onPayFee,
}: {
  application: any;
  onPayFee: () => void;
}) => {
  return (
    <div className="text-white font-bold shadow-md rounded-lg p-6 flex gap-6 items-center h-56 border-2">
      <img
        src={application.imageUrl || "/default-student.jpg"}
        alt="Student"
        className="w-32 h-32 rounded-full object-cover border-4 border-gray-700"
      />
      <div>
        <h2 className="text-xl text-black font-medium mb-2">
          {application.name || "N/A"}
        </h2>
        <p className="text-gray-300 mb-1">
          Email: {application.email || "N/A"}
        </p>
        <p className="text-gray-300 mb-1">
          Phone: {application.phone || "N/A"}
        </p>
        <p className="text-gray-300 mb-1">DOB: {application.dob || "N/A"}</p>
        <p className="text-gray-300 mb-1">
          Gender: {application.gender || "N/A"}
        </p>
        <p className="text-gray-300 mb-1">
          Course: {application.course || "N/A"}
        </p>
        {application.admitted && (
          <p className="text-gray-300 mb-1">Roll no: {application.rollNo}</p>
        )}
        {!application.admitted && (
          <p className="text-white">Student not admitted yet</p>
        )}
      </div>

      {application.accepted && !application.admitted && (
        <div className="flex justify-center border-4 border-white p-4 rounded-lg mt-4 w-24 shadow-md text-white">
          <button onClick={onPayFee}>Pay Fee</button>
        </div>
      )}
    </div>
  );
};

const YourApplicationPage = () => {
  const [application, setApplication] = useState<any>(null);
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

  const handlePayFee = async () => {
    try {
      const response = await fetch("/api/students/payfee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentId: application._id }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.error || "Failed to process payment");
        return;
      }

      const updatedApplication = await response.json();
      setApplication(updatedApplication);
      toast.success("Fee Successfully Paid");
    } catch (err) {
      console.error(err);
      toast.error("An error occurred");
    }
  };

  if (loading) {
    return <div className="text-white text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="h-96 text-white py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <ApplicationCard application={application} onPayFee={handlePayFee} />
      </div>
    </div>
  );
};

export default YourApplicationPage;
