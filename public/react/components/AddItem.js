import React, {useState} from 'react';
import apiURL from '../api';

export const AddItem = ({props, setIsAddingItem}) => {
//make the form
const [title, setTitle] = useState('');
const [price, setPrice] = useState(null);
const [description, setDescription] = useState('');
const [category, setCategory] = useState('');
const [image, setImage] = useState('');   

async function handleSubmit(ev) {
    //event.preventDefault();
    const response = await fetch(`${apiURL}/items/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {title, price, description, category, image}
      )
    });

    const data = await response.json();
    setIsAddingItem(null);
  }
    
    return  ( <>
    <h2>Add an Item</h2>
     <form>
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
        <input type="text" name="image"  placeholder="Image" value={ image } onChange={ev => setImage(ev.target.value)}/>
        </p> 
    </label>
    </form>
    <button type="submit" onClick={handleSubmit}>Add My Item!</button>
    <button onClick={() => setIsAddingItem(false)}>Back to Main Page</button>
    </>
    );
}