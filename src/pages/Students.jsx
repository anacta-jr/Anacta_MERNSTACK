import StudentData from "../data/students.json";
import Student from "../components/Student";

import { useState } from "react";

const Students = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [information, setInformation] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newInformation = {
      name: name,
      email: email,
    };
    setInformation([...information, newInformation]);

    setName("");
    setEmail("");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl font-bold">Students</h1>
      <p className="text-lg">Here are all the students in the system.</p>
      <p>Counter: {counter}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setCounter(counter + 1)}
      >
        +
      </button>
      <br />
      <input
        className="border p-2 m-2"
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="border p-2 m-2"
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
      >
        Submit
      </button>
      {information.map((info, index) => (
        <div key={index}>
          <p>Name: {info.name}</p>
          <p>Email: {info.email}</p>
        </div>
      ))}
      {StudentData.map((student) => (
        <>
          <Student
            id={student.id}
            name={student.name}
            age={student.age}
            email={student.email}
            course={student.course}
          />
        </>
      ))}
    </div>
  );
};

export default Students;
