import React from 'react';

export const Item = (props) => {

  return <>
      <h3>{props.item.title}</h3>
      <img className='item-image' src={props.item.image} alt={props.item.name} />
      <p>Product Description:{props.item.description}</p>
      <p>Price: ${props.item.price}</p>
      <p>Category: {props.item.category}</p>
  </>
} 
	