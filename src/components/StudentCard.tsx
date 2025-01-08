import React from "react";

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
  accepted?: boolean;
  admitted?: boolean;
}

interface StudentCardProps {
  student: Student;
  onClick: (student: Student) => void;
}

const StudentCard: React.FC<StudentCardProps> = ({ student, onClick }) => {
  return (
    <div
      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer"
      onClick={() => onClick(student)}
    >
      <h2 className="text-xl font-semibold text-black mb-2">{student.name}</h2>
      <ul className="list-disc">
        <li className="text-gray-600">Email: {student.email}</li>
        <li className="text-gray-600">Phone: {student.phone}</li>
        <li className="text-gray-600">
          DOB: {new Date(student.dob).toLocaleDateString()}
        </li>
        <li className="text-gray-600">Gender: {student.gender}</li>
        <li className="text-gray-600">Course: {student.course}</li>
      </ul>
    </div>
  );
};

export default StudentCard;
