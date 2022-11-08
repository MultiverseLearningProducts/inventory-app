import React, { useState } from "react";
import { EditForm } from "./EditForm";
import apiURL from "../api";

export const ItemDetails = ({ props }) => {
  const [showEditForm, setShowEditForm] = useState(false);

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

  const editClick = () => {
    setShowEditForm(true);
  };

  return (
    <>
      <div className="container">
        <div id="image">
          <img
            id="item-detail-image"
            src={props.item.image}
            alt={props.item.title}
          />
        </div>

        <div id="item-details">
          <h3 id="single-item-title">{props.item.title}</h3>
          <p id="item-description">{props.item.description}</p>

          <div id="item-price">${props.item.price}</div>
        </div>

        <div id="buttons">
          <button className="button" onClick={deleteClick}>
            Delete Item
          </button>
          <button className="button" onClick={fetchAllClick}>
            Back
          </button>
          <button className="button" onClick={editClick}>
            Edit
          </button>
          {showEditForm ? <EditForm props={props} /> : null}
        </div>
      </div>
    </>
  );
};
