import React, { useState } from "react";
import ItemList from "./components/ItemList.jsx";

function App(){

  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if(input.trim() === "") return;

    const newItem = {
      id: Date.now(),
      text: input
    };

    setItems([...items, newItem]);
    setInput("");
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return(
    <div className="container">

      <h1>Dynamic Item List</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter item"
          value={input}
          onChange={(e)=>setInput(e.target.value)}
        />

        <button onClick={addItem}>Add Item</button>
      </div>

      <ItemList items={items} removeItem={removeItem} />

    </div>
  );
}

export default App;
