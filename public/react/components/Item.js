import React from 'react';

export const Item = (props) => {

  return <>
    <h3>{props.item.title}</h3>
    <img id="itemImage" src={props.item.image} alt={props.item.name} />
  </>
} 
	