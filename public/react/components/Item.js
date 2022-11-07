import React from 'react';

export const Item = (props) => {

  return <>

    <h3 onClick={() => {props.clicked(props.item.id)}}>{props.item.title}</h3>
    <img id="itemImage" src={props.item.image} alt={props.item.name} />

  </>
} 
	