import { useLocation } from "react-router-dom";

const StudentDetails = () => {
  const location = useLocation();
  const { student } = location.state;

  return (
    <>
      <div>
        <p>Student Number: {student.id}</p>
        <p>Name: {student.name}</p>
        <p>Age: {student.age}</p>
        <p>Email: {student.email}</p>
        <p>Course: {student.course}</p>
      </div>
    </>
  );
};

export default StudentDetails;
