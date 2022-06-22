import React, { useState, useNavigate } from "react";
import apiURL from "../api";

export const Item = ({
  item,
  setSelectedItem,
  fetchItems,
  children,
  editButton,
}) => {
  const handleDelete = async () => {
    try {
      await fetch(`${apiURL}/items/${item.id}`, {
        method: "DELETE",
      });
      setSelectedItem(null);
      fetchItems();
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  return (
    <div className="option">
      <div className="check">
        <img
          src={item.image}
          alt={item.title}
          style={{ width: 180, height: 280, padding: 4, margin: 0 }}
        />
      </div>
      <div className="mars">
        {item.name}
        {item.description}
        {item.category}
        ${item.price}
      </div>
      
        <button onClick={() => setSelectedItem(children ? null : item)}>
          {children ? "Back To main Page" : "More Info"}
        </button>
        {editButton}

        <button className="btn-danger" onClick={handleDelete}>
          DELETE
        </button>

        {/* {children} */}
     
    </div>
  );
};
