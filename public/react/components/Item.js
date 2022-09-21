import React, { useEffect } from "react";
import "./all-items.css";
export const Item = ({ item, fetchItem }) => {
  return (
    <>
    <div className="items-card">
      <img src={item.image}  alt=""></img>
      <h3>{item.title}</h3>
      
      <button type="button" class="btn btn-outline-primary" onClick={() => fetchItem(item.id)}>More info</button>
      </div>
    </>
  );
};

