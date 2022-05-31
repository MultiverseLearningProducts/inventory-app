import React from 'react';

export function Items (props) {

  const handleClick = () => {
    
  }

  return <>
    <h3><button onClick={handleClick}>{props.items.name}</button></h3>
    {/* <img src={props.items.image} alt={props.items.name} /> */}
  </>
} 
	