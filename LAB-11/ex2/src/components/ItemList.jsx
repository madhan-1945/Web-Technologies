function ItemList({items, removeItem}){

  if(items.length === 0){
    return <p className="empty">No items in the list</p>;
  }

  return(
    <ul className="list">

      {items.map(item => (
        <li key={item.id}>

          {item.text}

          <button onClick={()=>removeItem(item.id)}>Remove</button>

        </li>
      ))}

    </ul>
  );
}

export default ItemList;
