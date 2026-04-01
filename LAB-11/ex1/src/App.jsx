import React, { useState } from "react";

function App(){

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if(name==="" || email==="" || password===""){
      setError("All fields are required");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
      setError("Enter a valid email address");
      return;
    }

    if(password.length < 6){
      setError("Password must be at least 6 characters");
      return;
    }

    alert("Form submitted successfully!");

    setName("");
    setEmail("");
    setPassword("");
    setError("");
  };

  return(
    <div className="container">

      <h2>User Form</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Submit</button>

      </form>

    </div>
  );
}

export default App;
