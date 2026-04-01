import StudentCard from "./components/StudentCard.jsx";

function App(){

  const students=[
    {name:"John Doe",department:"Computer Science",marks:85},
    {name:"Alice Smith",department:"Information Technology",marks:90},
    {name:"David Lee",department:"AI & ML",marks:78}
  ];

  return(
    <div className="container">
      <h1>Student Cards</h1>

      <div className="card-container">
        {students.map((s,i)=>(
          <StudentCard 
            key={i}
            name={s.name}
            department={s.department}
            marks={s.marks}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
