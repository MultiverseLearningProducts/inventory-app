import React, { useState, useEffect } from "react";
import apiURL from "../api";
import { ItemDetails } from "./ItemDetails";

export const Item = (props) => {

  console.log("what is clicked outside", titleClicked);

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
      <div className={titleClicked ? "hidden" : "showMe"}>
        <h3
          onClick={() => {
            {handleClick(props.item.id)};
          }}
        >
          {props.item.title}
        </h3>
        <img src={props.item.image} alt={props.item.title} />
      </div>
    </>
  );
};
