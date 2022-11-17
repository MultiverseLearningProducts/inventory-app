import React from 'react';

export const Item = (props) => {

  return <>
    <h3>Item: {props.item.title}</h3>
    <h3>Price: {props.item.price}</h3>
    <h3>Description: {props.item.description}</h3>    
    <h3>Category: {props.item.category}</h3>      
    
    <img src={props.item.image} alt={props.item.name} />
  </>
} 
	