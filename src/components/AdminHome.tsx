"use client";

import React, { useState, useEffect } from "react";

import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { StudentModal } from "./StudentModal";

interface Student {
  _id: string;
  userId: string;
  name: string;
  email: string;
  phone: number;
  dob: string;
  gender: string;
  course: string;
  rollNo?: string;
  admitted?: boolean;
  accepted?: boolean;
}

const AdminHome: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("/api/admin/studentForms");
        if (!response.ok) {
          throw new Error("Failed to fetch students");
        }
        const data = await response.json();
        setStudents(data.students);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const handleAction = async (
    studentId: string,
    action: "accept" | "reject"
  ) => {
    try {
      const response = await fetch("/api/students/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentId, action }),
      });

      if (!response.ok) {
        throw new Error("Failed to update student action");
      }

      toast.success(`Student form ${action}ed successfully`);

      setStudents((prev) =>
        prev.map((student) =>
          student._id === studentId
            ? { ...student, accepted: action === "accept" }
            : student
        )
      );
    } catch (err) {
      setError((err as Error).message);
    }
  };

  // const handleCardClick = (student: Student) => {
  //   setSelectedStudent(student);
  //   setShowModal(true);
  // };

  const closeModal = () => {
    setShowModal(false);
    setSelectedStudent(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#111827]">
        <AiOutlineLoading3Quarters className="text-4xl text-blue-600 animate-spin" />
        <span className="ml-4 text-lg text-gray-600">Loading students...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#111827]">
        <p className="text-xl text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-[#111827] min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-400 mb-8">
        Admin Dashboard
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {students.map((student) => (
          <div
            key={student._id}
            className="relative bg-[#1f2937] border border-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden p-6"
          >
            <div className="flex flex-col items-center text-center">
              {/* Student Profile Avatar */}
              <div className="w-20 h-20 bg-blue-600 text-white flex items-center justify-center rounded-full shadow-lg mb-4">
                {student.name.charAt(0).toUpperCase()}
              </div>
              {/* Student Info */}
              <h3 className="text-xl font-semibold text-gray-200">
                {student.name}
              </h3>
              <p className="text-gray-400 text-sm">{student.email}</p>
              <p className="text-gray-400 text-sm">{student.phone}</p>
            </div>

            {/* Status/Actions */}
            <div className="mt-6">
              {student.accepted ? (
                <div className="flex items-center justify-center gap-2 bg-green-700 text-green-100 rounded-full py-2 px-4">
                  <span className="text-sm font-medium">Verified</span>
                </div>
              ) : (
                <div className="flex justify-center gap-3">
                  <button
                    onClick={() => handleAction(student._id, "accept")}
                    className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-700 text-white text-sm rounded-lg shadow hover:scale-105 transition-transform duration-200"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleAction(student._id, "reject")}
                    className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-700 text-white text-sm rounded-lg shadow hover:scale-105 transition-transform duration-200"
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>

            {/* View Details */}
            {/* <button
              onClick={() => handleCardClick(student)}
              className="absolute top-4 right-4 bg-blue-500 text-white text-sm px-3 py-1 rounded-full shadow hover:bg-blue-600 transition-all"
            >
              Details
            </button> */}
          </div>
        ))}
      </div>

      {showModal && selectedStudent && (
        <StudentModal student={selectedStudent} onClose={closeModal} />
      )}
    </div>
  );
};

export default AdminHome;
