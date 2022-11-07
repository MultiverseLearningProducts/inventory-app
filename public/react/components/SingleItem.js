import React, { useState } from 'react';
import apiURL from '../api';
import { UpdateForm } from './UpdateForm';

export const SingleItem = (props) => {
    const [isEditing, setIsEditing] = useState(false);

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
   { !isEditing && <div>
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
        <div>
            <button onClick={() => setIsEditing(true)}>Update Item</button>
        </div>
        <h1>{props.items.category}</h1></div>}
        {isEditing && <div>
            <UpdateForm
                title={props.items.title}
                image={props.items.image}
                price={props.items.price}
                description={props.items.description}
                category={props.items.category}
                id={props.items.id}
                fetchItems={props.fetchItems}
                setIsEditing={setIsEditing}
                setIsClicked={props.setIsClicked}
                />
            </div>}
    </>
}