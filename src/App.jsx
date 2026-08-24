import StudentComponent from "./components/StudentComponent";
import SubjectComponent from "./components/SubjectComponent";

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
  
  const subjectData1 = {
    subjectname: "Methods of Research",
    subjectcode: "DCIT60A",
    subjectdescription: "This course introduces students to the fundamental concepts and principles of research methods. It covers various research designs, data collection techniques, and data analysis methods. Students will learn how to formulate research questions, conduct literature reviews, and present their findings effectively."
  };
  const subjectData2 = {
    subjectname: "Infomation Assuarance and Security",
    subjectcode: "DCIT60B",
    subjectdescription: "This course provides an overview of information assurance and security principles. Students will learn about risk management, security policies, encryption techniques, and best practices for protecting information systems. The course also covers emerging threats and technologies in the field of cybersecurity."
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <StudentComponent {...studentData1} />
        <SubjectComponent {...subjectData1} />
        <SubjectComponent {...subjectData2} />
        <StudentComponent {...studentData2} />
        <SubjectComponent {...subjectData2} />
        <StudentComponent {...studentData3} />
        <SubjectComponent {...subjectData1} />
      </div>
    </>
  );
}

export default App;