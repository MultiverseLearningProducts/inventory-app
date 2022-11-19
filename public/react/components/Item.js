import React from 'react';
import apiURL from '../api';

export const Item = ({item, isSinglePageView, setSinglePageView, setItemObjectTitle}) => {
    const handleItemClick = () => {
        /*const response = await fetch (`${apiURL}/items/${id}`)
        const singleItem = await response.json() 
        console.log(singleItem) */
        setSinglePageView(!isSinglePageView);
        setItemObjectTitle(item.title);
      }
  return <>
    <h3>{item.title}</h3>
    <img src={item.image} alt={item.title} />
    <p>{item.price}</p>
    <p>{item.description}</p>
    <button onClick={handleItemClick}>{item.id}</button>
  </>
} 