import React from 'react';

export const Items = (props) => {
console.log()
  return <>
    <h3>{props.item.title}</h3>
    <img src={props.item.image} alt={props.item.title} />
    <h4>{props.item.price}</h4>
  </>
} 
	