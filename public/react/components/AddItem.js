import React, {useState} from 'react';
import apiURL from '../api';

export const AddItem = ({props, setIsAddingItem}) => {
//make the form
const [title, setTitle] = useState('');
const [price, setPrice] = useState(null);
const [description, setDescription] = useState('');
const [category, setCategory] = useState('');
const [itemImage, setItemImage] = useState('');   


const handleSubmit = (ev) => {
    const url = `${apiURL}/items`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {title,price,description,category,itemImage}
        )
    }
    fetch(url,options)
    .then(response => response.json())
    .then(data => console.log(data))
    setIsAddingItem(false);
    props.item({});
}
    
    return  ( <>
    <h2>Add an Item</h2>
     <form onSubmit={handleSubmit}>
    <label>
        <p>
        <input type="text" name="title" placeholder="Title" value={ title } onChange={ev => setTitle(ev.target.value)} /> 
        </p>
        <p>
        <input type="number"  name="price" placeholder="Price" value={ price } onChange={ev => setPrice(ev.target.value)}/> 
        </p>
        <p>
        <input type="text" name="description" placeholder="Description" value={ description } onChange={ev => setDescription(ev.target.value)}/> 
        </p>
        <p>
        <input type="text" name="category" placeholder="Category" value={ category } onChange={ev => setCategory(ev.target.value)}/> 
        </p>
        <p>
        <input type="text" name="itemImage"  placeholder="Image" value={ itemImage } onChange={ev => setItemImage(ev.target.value)}/>
        </p> 
    </label>
    </form>
    <button type="submit">Add My Item!</button>
    <button onClick={() => setIsAddingItem(false)}>Back to Main Page</button>
    </>
    );
}