const TeacherCard = (Teacher) => {
  return (
    <div className=" bg-white shadow-md rounded-lg p-4 m-4 w-64">
      <h2 className="text-xl font-bold mb-2">Name: {Teacher.name}</h2>
      <p className="text-gray-600">Specialization: {Teacher.specialization}</p>
    </div>
  );
};

export default TeacherCard;
