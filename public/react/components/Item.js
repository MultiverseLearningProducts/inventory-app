import React from 'react';
import apiURL from '../api';

export const Item = (props) => {

  return <>
    <h3>{props.item.title}</h3>
    <img src={props.item.image}  />
  </>
} 
	