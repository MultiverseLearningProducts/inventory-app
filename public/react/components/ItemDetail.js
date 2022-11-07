import React from "react";
import "../itemdetail.css";
import Button from "@mui/material/Button";

function ItemDetail({ setShowDetails, item }) {
  console.log(item.image);
  return (
    <div>
      <button className="editButton">Edit</button>
      <div className="itemDetailsContainer">
        <img className="itemimage" src={item.image} />
        <div>
          <h1>{item.title}</h1>
          <p className="itemcat">{item.category}</p>
          <h3 className="itemdescription">{item.description} </h3>
          <h2>${item.price}</h2>
          <button className="buttonitem" onClick={() => setShowDetails(false)}>
            Back
          </button>
          <button className="addtocart">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
