import React from 'react';

export const Item = (props) => {

  return <>
    <div>
      <h3 onClick = {() => props.onClick(props.item.id)}>{props.item.title}</h3>
      <img src={props.item.image} alt={props.item.title} />
    </div>
  </>
} 




// onClick = {() => props.onClick(props.item.id)}