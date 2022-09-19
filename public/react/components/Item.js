import React from 'react';

export const Item = (props) => {

    return <>
      <h3>{props.item.title} ${props.item.price}</h3>
      <p>Click on image for more details</p>
      <img src={props.item.image} onClick={() => props.handleClick(props.item.id)}/>
    </>
  } 