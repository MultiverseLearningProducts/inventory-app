import React from 'react';

export const Item = (props) => {

  return <>
    <h3>{props.item.name}</h3>
    <h4>{props.item.price}</h4>
    <img src={props.item.image} alt={props.item.name} />
  </>
} 
	