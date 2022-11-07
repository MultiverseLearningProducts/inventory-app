import React from "react";
import "../itemedit.css";

function ItemEdit({ item, setIsEdit, isEdit }) {
  console.log(item);
  return (
    <div className="itemDetailsContainer">
      <img className="itemimage" src={item.image} />
      <div className="formelements">
        <input className="titleof" placeholder={item.title}></input>
        <textarea
          className="itemeditdescription"
          placeholder={item.description}
        ></textarea>
        <input className="titleof" placeholder={item.category}></input>
        <input className="titleof" placeholder={item.price}></input>
        <button className="titleof" onClick={() => setIsEdit(false)}>
          back
        </button>
      </div>
    </div>
  );
}

export default ItemEdit;
