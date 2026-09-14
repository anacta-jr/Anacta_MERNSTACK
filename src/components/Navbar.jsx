import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-800 text-white p-4">
      <Link to={"/"}>Home</Link>
      <Link to={"/Students"}>Students</Link>
    </div>
  );
};

export default Navbar;
