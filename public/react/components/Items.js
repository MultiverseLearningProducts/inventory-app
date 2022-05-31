import React from 'react';
import apiURL from '../api';

export const Items = ({ item, setSingleItem }) => {
  console.log()
  const handleClick = async () => {
    const response = await fetch(`${apiURL}/items/${item.id}`);
    const itemData = await response.json();
    setSingleItem(itemData);
  }
  return <>
    <div onClick={handleClick}>
      <h3>{item.title}</h3>
      <img src={item.image} alt={item.title} />
      <h4>{item.price}</h4>
    </div>
  </>
}
