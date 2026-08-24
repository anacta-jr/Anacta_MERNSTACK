import StudentComponent from "./components/StudentComponent";

const App = () => {
  const studentData1 = {
    name: "Rolando Jr Anacta",
    age: 20,
    section: "BSIT3-1",
    studentnumber: "202400752",
    course: "Information Technology"
  };
  const studentData2 = {
    name: "Nivek Gellno",
    age: 50,
    section: "BSIT3-1",
    studentnumber: "202403343",
    course: "Information Technology"
  };
  const studentData3 = {
    name: "Jesreal Dininais",
    age: 17,
    section: "BSIT3-1",
    studentnumber: "202400437",
    course: "Information Technology"
  };
  

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <StudentComponent {...studentData1} />
        <StudentComponent {...studentData2} />
        <StudentComponent {...studentData3} />
      </div>
    </>
  );
}

export default App;