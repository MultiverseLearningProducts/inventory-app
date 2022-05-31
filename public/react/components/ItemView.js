import React from 'react';
import apiURL from '../api';

export const ItemView = ({singleItem, setSingleItem}) => {
    const handleClick = async () => {
        const response = await fetch(`${apiURL}/items/${singleItem.id}`, {method: "DELETE"});
        const itemData = await response.json();
        setSingleItem(0); 
    }
    return <>
        <h1>{singleItem.title}</h1>
        <h2>{singleItem.price}</h2>
        <img src={singleItem.image} alt={singleItem.title}/>
        <h3>{singleItem.description}</h3>
        <h4>{singleItem.category}</h4>
        <button onClick={() => {setSingleItem(0)}}>Back</button>
        <button onClick={handleClick}>Delete</button>
    </>
}