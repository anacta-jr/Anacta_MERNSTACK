import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home.jsx";
import Students from "./pages/Students.jsx";
import StudentDetails from "./pages/StudentDetails.jsx";
import Teachers from "./pages/Teachers.jsx";
import AddTeacher from "./pages/AddTeacher.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  const [teachers, setTeachers] = useState([]);

  const handleAddData = (newTeachers) => {
    setTeachers([...teachers, newTeachers]);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Students" element={<Students />}></Route>
          <Route
            path="/StudentDetails/:id"
            element={<StudentDetails />}
          ></Route>
          <Route
            path="/Teachers"
            element={<Teachers data={teachers} />}
          ></Route>
          <Route
            path="/Teachers/AddTeacher"
            element={<AddTeacher onAddData={handleAddData} />}
          ></Route>
          <Route
            path="*"
            element={
              <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-3xl font-bold mb-4">
                  404 - Rene Not Found
                </h1>
                <p className="text-gray-700">
                  The person you are looking for is not available. Please check
                  the sea.
                </p>
                <p className="text-gray-700">
                  Contact:{" "}
                  <a
                    href="mailto:jesreel.gelle@cvsu.edu.ph"
                    className="text-blue-500 hover:underline"
                  >
                    jesreel.gelle@cvsu.edu.ph
                  </a>
                </p>
              </div>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
