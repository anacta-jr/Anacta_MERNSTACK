import { Link } from "react-router-dom";
import TeacherCard from "../components/TeacherCard.jsx";

import TeachersData from "../data/teachers.json";

const Teachers = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Teachers</h1>
      <Link
        to="/Teachers/AddTeacher"
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Add Teacher
      </Link>
      <div className="flex flex-col justify-center">
        {data.map((newTeacher, index) => (
          <TeacherCard
            name={newTeacher.name}
            specialization={newTeacher.specialization}
            key={index}
          />
        ))}
        {TeachersData.map((teacher, index) => (
          <TeacherCard
            name={teacher.name}
            specialization={teacher.specialization}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Teachers;
