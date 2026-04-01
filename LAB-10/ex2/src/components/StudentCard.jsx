function StudentCard(props){

  return(
    <div className="card">

      <p><b>Name:</b> {props.name}</p>
      <p><b>Department:</b> {props.department}</p>
      <p><b>Marks:</b> {props.marks}</p>

    </div>
  );
}

export default StudentCard;
