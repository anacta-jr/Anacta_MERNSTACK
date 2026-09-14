import { Link } from "react-router-dom";

const Student = (props) => {
  return (
    <>
      <div className="border p-4 m-2">
        <p>Student Number: {props.id}</p>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <Link to={`/StudentDetails/${props.id}`} state={{ student: props }}>
          View Details
        </Link>
      </div>
    </>
  );
};

export default Student;
