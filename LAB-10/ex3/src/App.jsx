import React, { useState } from "react";

function App(){

  const [count,setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return(
    <div className="container">
      <h1>React Counter</h1>

      <div className="counter">{count}</div>

      <div className="buttons">
        <button className="inc" onClick={increment}>Increment</button>
        <button className="dec" onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
