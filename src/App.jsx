import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Students from "./pages/Students.jsx";
import StudentDetails from "./pages/StudentDetails.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
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
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
