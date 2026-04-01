import { useEffect, useState } from "react";

function DataList(){

  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);

  useEffect(()=>{

    const fetchData = async () => {

      try{
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");

        if(!res.ok){
          throw new Error("Failed to fetch data");
        }

        const result = await res.json();
        setData(result.slice(0,10));
      }
      catch(err){
        setError(err.message);
      }
      finally{
        setLoading(false);
      }

    };

    fetchData();

  },[]);

  if(loading){
    return <p className="loading">Loading data...</p>;
  }

  if(error){
    return <p className="error">Error: {error}</p>;
  }

  return(
    <ul className="list">
      {data.map(item=>(
        <li key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </li>
      ))}
    </ul>
  );

}

export default DataList;
