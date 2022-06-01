import React from 'react';
import apiURL from '../api';

export const Items = ({ item, setSingleItem }) => {
  const handleClick = async () => {
    const response = await fetch(`${apiURL}/items/${item.id}`);
    const itemData = await response.json();
    setSingleItem(itemData);
  }
  return <>
    <div onClick={handleClick} className="all">
      <h3 className="title">{item.title}</h3>
      <img src={item.image} alt={item.title} />
      <h4 className="price">{item.price}</h4>
    </div>
  </>
}
