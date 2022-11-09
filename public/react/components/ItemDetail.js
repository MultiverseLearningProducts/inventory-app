import React, { useEffect } from "react";
import "../itemdetail.css";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import edit from "../edit.png";

function ItemDetail({
  fetchItems,
  setShowDetails,
  selectedItem,
  items,
  isEdit,
  setIsEdit,
}) {
  useEffect(() => {
    fetchItems();
  }, []);

  console.log(selectedItem);

  const ind = items.findIndex((x) => x.id === selectedItem.id);
  const item = items[ind];

  return (
    <div>
      <IconButton size="large" color="inherit" onClick={() => setIsEdit(true)}>
        <img className="editButton" src={edit} />
      </IconButton>

      <div className="itemDetailsContainer">
        <img className="itemimage" src={item?.image} />
        <div>
          <h1>{item?.title}</h1>
          <p className="itemcat">{item?.category}</p>
          <h3 className="itemdescription">{item?.description} </h3>
          <h2>${item?.price.toFixed(2)}</h2>
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
