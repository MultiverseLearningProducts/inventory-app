import React from 'react';

export const ItemDetails = ({ props }) => {

    return <div id="itemDetails">
    
        <h3>{props.item.title}</h3>
        <img id="item-detail-image" src={props.item.image} alt={props.item.title}/>
        <p>{props.item.description}</p>
        <div>${props.item.price}</div>
    
    </div>
}