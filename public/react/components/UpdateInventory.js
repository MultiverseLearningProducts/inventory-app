import React, { useState} from 'react';
import apiURL from "../api";


export const UpdatingInventory = ( setIsUpdatingInventory, singleItem, setSingleItem) => {
    // {const [title, setTitle] = useState(singleItem.title);
    // const [description, setDescription] = useState(singleItem.description);
    // const [price, setPrice] = useState(singleItem.price);
    // const [image, setImage] = useState(singleItem.image);
    // const [category, setCategory] = useState(singleItem.category);
  
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [price, setPrice] = useState("");
const [image, setImage] = useState("");
const [category, setCategory] = useState("");
  

    const updateSubmit = async (event) => {
      event.preventDefault();

     
      
  const response = await fetch(`${apiURL}/items/${singleItem.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                  
            body: JSON.stringify({
          
           title,
           description,
           price,
            image,
            category,
            })}
            })
            const data = await response.json();
            console.log(data)
          
          }

    

  
       return (
    <>
  {console.log( (singleItem.title))}
      
        <h1>{singleItem.title}</h1>
        <h2>${singleItem.price}</h2>
        <img src={singleItem.image} alt={singleItem.title} />
        <p>{singleItem.description}</p>
        <br></br>
        <h4>{singleItem.category}</h4>  
        <br></br>

  
      <h6>update form</h6>
      <form onSubmit={updateSubmit}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
   
        <input
          type="text"
          placeholder="price"
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
      
        <input
          type="text"
          placeholder="image"
          value={image}
          onChange={(event) => {
            setImage(event.target.value);
          }}
        />
      
        <input
          type="text"
          placeholder="category"
          value={category}
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        />
        <button type="submit">Update item to inventory</button>
   
        <button onClick={() => { setIsUpdatingInventory(false)}} >Return to Inventory</button>
      </form>
    </>
  )};