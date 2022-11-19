import React from 'react';

export const Item = ({item, items, setItems, isSinglePageView, setSinglePageView, fetchItems, itemObject, setItemObject, handleItemClick}) => {

  return <>
    <h3>{item.title}</h3>
    <img src={item.image} alt={item.title} />
    <p>{item.price}</p>
    <p>{item.description}</p>
    <button onClick = {handleItemClick}>Its a Button ... maybe?</button>
  </>
} 