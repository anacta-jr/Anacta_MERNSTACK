const SubjectComponent = (props) => {
  return (
    <>
        <h2>Subject Name: {props.subjectname}</h2>
        <h2>Subject Code: {props.subjectcode}</h2>
        <h2>Subject Description: {props.subjectdescription}</h2>
    </>
  );
};

export default SubjectComponent;