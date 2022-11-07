import React from 'react';
import apiURL from "../api";

export const ItemDetails = ({ props }) => {

    const handleClick = async () => {
        const res = await fetch(`${apiURL}/items`);
        const data = await res.json();
        props.setSingleItem(null);
        props.setItems(data);
      };

    return <>
    
        <h3>{props.item.title}</h3>
        <img src={props.item.image} alt={props.item.title}/>
        <p>{props.item.description}</p>
        <div>{props.item.price}</div>
        <button onClick={handleClick}>Back</button>
    
    </>
}