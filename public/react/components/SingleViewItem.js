import React from "react";
import apiURL from "../api";

export const SingleViewItem = ({props, setSingleViewItem}) => {
    
    return (
    <>
      <h3>{props.title}</h3>
      <h2>${props.price}</h2>
      <img src={props.image} alt={props.name}/>
      <p>Description {props.description}</p>
      <p>{props.category}</p>
      <button onClick={() => setSingleViewItem(null)}>Back to Main Page</button>
    </>
    );
};
