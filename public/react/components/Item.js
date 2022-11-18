import React, { useState, useEffect } from 'react';
import apiURL from '../api'; 

export const Item = ({item, items, showSingleItem, setShowSingleItem, currentItem, setCurrentItem, setItems}) => {

  async function fetchItems(){
    try {
      const res = await fetch(`${apiURL}/items`);
      const itemsData = await res.json();
      
      // setCurrentItem(itemsData);
      setItems(itemsData);
      setCurrentItem(item.title);
      console.log(currentItem)
    } catch (err) {
      console.log("Oh no an error! ", err)
    }
  }


  useEffect(() => {
    fetchItems();
  }, []);


  const handleCLick = () => {
    fetchItems()
  }


const handlePageClick = () => {
  fetchItems();
  setShowSingleItem(!showSingleItem);
}

const handleBackClick = () => {
  setShowSingleItem(!showSingleItem);
}


  return <>

    {showSingleItem ? (<div>
      <h3>{item.title}</h3>
      <p>{0}</p>
      <img className='item-image' src={item.image} alt={item.name} />
      <p>Product Description:{item.description}</p>
      <p>Price: ${item.price}</p>
      <p>Category: {item.category}</p>
      <button onClick={handleBackClick}>Back Click</button>
    </div>) : 
      <div>
        <h3 onClick={handlePageClick}>{item.title}</h3>
        <p>{0}</p>
        <img className='item-image' src={item.image} alt={item.name} />
        <p>Product Description:{item.description}</p>
        <p>Price: ${item.price}</p>
        <p>Category: {item.category}</p>
      </div>
    } 
  </>
} 