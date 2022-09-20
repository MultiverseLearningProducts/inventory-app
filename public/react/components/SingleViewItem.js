import React from "react";
import apiURL from "../api";

export const SingleViewItem = ({props,setSingleViewItem, isDeleted, setIsDeleted}) => {
  async function handleDelete(ev) {
    const response = await fetch(`${apiURL}/items/${props.id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    setSingleViewItem(null);
    setIsDeleted(true);
    refreshPage();
  }

  function refreshPage() {
    window.location.reload(false);
  }
    return (
    <>
      <h3>{props.title}</h3>
      <h2>${props.price}</h2>
      <img src={props.image} alt={props.name}/>
      <p>Description {props.description}</p>
      <p>{props.category}</p>
      <button onClick={() => setSingleViewItem(null)}>Back to Main Page</button>
      <button onClick={handleDelete}>Delete Item</button>
    </>
    );
};
