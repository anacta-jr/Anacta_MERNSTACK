const StudentComponent = (props) => {
    return (
        <>
            <h2>Name: {props.name}</h2>
            <h2>Age: {props.age}</h2>
            <h2>Section: {props.section}</h2>
            <h2>Student Number: {props.studentnumber}</h2>
            <h2>Course: {props.course}</h2>
        </>
    );
}

export default StudentComponent;