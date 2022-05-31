import React, {useState} from 'react';

export const ItemView = ({singleItem}) => {

    return <>
        <h1>{singleItem.title}</h1>
        <h2>{singleItem.price}</h2>
        <img src={singleItem.image} alt={singleItem.title}/>
        <h3>{singleItem.description}</h3>
        <h4>{singleItem.category}</h4>
    </>
}