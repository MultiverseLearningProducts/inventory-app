import React from "react";
import apiURL from "../api";

export const ItemDetails = ({ props }) => {
  const fetchAllClick = async () => {
    const res = await fetch(`${apiURL}/items`);
    const data = await res.json();
    props.setSingleItem(null);
    props.setItems(data);
  };

  const deleteClick = async () => {
    const res = await fetch(`${apiURL}/items/${props.item.id}`, {
      method: "Delete",
    });
    const deletedData = await res.json();
    console.log(deletedData);
    fetchAllClick();
  };

  return (
    <div id="itemDetails">
      <h3>{props.item.title}</h3>
      <img
        id="item-detail-image"
        src={props.item.image}
        alt={props.item.title}
      />
      <p>{props.item.description}</p>
      <div>${props.item.price}</div>
      <button className="button" onClick={deleteClick}>Delete Item</button>
      <button className="button" onClick={fetchAllClick}>Back</button>
    </div>
  );
};
