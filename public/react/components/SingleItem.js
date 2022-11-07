import React, { useState } from 'react';
import { Item } from './Item';
import apiURL from '../api';

export const SingleItem = (props) => {
    console.log(props, '??')

    const handleDelete = async (id) => {
        const response = await fetch(`${apiURL}/items/${id}`, {
            method: "DELETE",
        })

        if (response.ok) {
            await props.fetchItems();
            props.setIsClicked(false)
        }
    };

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
        <div>
            <button onClick={() => handleDelete(props.items.id)}>Delete Item</button>
        </div>
        <h1>{props.items.category}</h1>
    </>
}