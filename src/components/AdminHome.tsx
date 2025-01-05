"use client";

import React, { useState, useEffect } from "react";
import { StudentCard } from "./StudentCard";
import { StudentModal } from "./StudentModal";

interface Student {
  userId: string;
  name: string;
  email: string;
  phone: number;
  dob: string;
  gender: string;
  course: string;
  rollNo?: string;
  admitted?: boolean;
}

const AdminHome: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Fetch students on mount
//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/api/students"); // Replace with your API endpoint
//         if (!response.ok) {
//           throw new Error("Failed to fetch students");
//         }
//         const data = await response.json();
//         setStudents(data);
//       } catch (err) {
//         setError((err as Error).message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStudents();
//   }, []);

  const handleCardClick = (student: Student) => {
    setSelectedStudent(student);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedStudent(null);
  };

  if (loading) {
    return <div className="text-center p-6">Loading students...</div>;
  }

  if (error) {
    return <div className="text-center p-6 text-red-600">{error}</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Admin Home</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {students.map((student) => (
          <StudentCard
            key={student.userId}
            student={student}
            onClick={handleCardClick}
          />
        ))}
      </div>

      {showModal && selectedStudent && (
        <StudentModal student={selectedStudent} onClose={closeModal} />
      )}
    </div>
  );
};

export default AdminHome;
