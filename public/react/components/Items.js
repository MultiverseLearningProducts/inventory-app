import React, {useState} from 'react';
import apiURL from '../api';

export const Items = ({ item, setSingleItem }) => {
  const handleClick = async () => {
    const response = await fetch(`${apiURL}/items/${item.id}`);
    const itemData = await response.json();
    setSingleItem(itemData);

  }
  

  return <>
    <div  className="all">
    <img src={item.image} alt={item.title} />
      <h3 className='title'>{item.title}</h3>
      
      <h4>${item.price}</h4>
      <div>
      <button onClick={handleClick}>Details</button>
      <button>Add To Cart</button></div>
    </div>
  </>
}
