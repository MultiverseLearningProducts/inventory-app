import React, { useState, useEffect } from "react";
import apiURL from "../api";
import { ItemDetails } from "./ItemDetails";

export const Item = (props) => {


  const handleClick = async (id) => {
    const res = await fetch(`${apiURL}/items/${id}`);
    const data = await res.json();
    props.setSingleItem([data]);
  };

  return props.singleItem ? (
    <>
      <ItemDetails props={props}/>
    </>
  ) : (
    <>
      <div id="each-item">
        <h3
          onClick={() => {
            {handleClick(props.item.id)};
          }}
        >
          {props.item.title}
        </h3>
        <img id="each-item-image" src={props.item.image} alt={props.item.title} />
      </div>
    </>
  );
};
