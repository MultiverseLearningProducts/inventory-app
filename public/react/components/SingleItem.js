import React, { useState } from 'react';
import { Item } from './Item';

export const SingleItem = (props) => {
    console.log(props)
    return <>
    <br></br>
        <br></br>
        <h1>{props.items.title}</h1>
        <br></br>
        <img src={props.items.image} />
        <br></br>
        <br></br>
        <h3>{props.items.price}</h3>
        <br></br>
        <br></br>
        <br></br>
        <h3>{props.items.description}</h3>
        <br></br>
        <br></br>
        <h1>{props.items.category}</h1>
    </>
}