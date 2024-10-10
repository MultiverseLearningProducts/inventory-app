import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import apiURL from "../api";
// import addItem from './addItem'; // was going to try to refactor this component to be reusable but decided against it

const Items = ({ item }) => {
  // state to track the update boolean and formInput
  const [update, setUpdate] = useState(false);
  const [formInput, setFormInput] = useState({
    name: item.name,
    description: item.description,
    price: item.price.toFixed(2),
    category: item.category,
    image: item.image,
  });

  //onclick function to toggle update state and corresponding useEffect for PUT request
  function handleUpdate(e) {
    setUpdate(!update);
  }

  async function updateItem(e) {
    e.preventDefault();
    try {
      const response = await fetch(`${apiURL}/items/${item.id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formInput),
      }).then(setUpdate(!update));
    } catch (e) {
      console.log("unable to update item", e);
    }
  }

  useEffect(()=>{
    console.log(formInput)
  },[formInput])

  //onchange function for form data
  function handleChange(e) {
    console.log(e.target.name)
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  }

  // delete request

  async function deleteItem(e) {
    try {
      const response = await fetch(`${apiURL}/items/${item.id}`, {
        method: "DELETE",
      })

    } catch (e) {
      console.log("unable to delete item", e);
    }
  }

  if (!item) return <div>No item details to show</div>;

  console.log(update);

  if (!update) {
    return (
      <div className="item-details">
        <h2>{formInput.name}</h2>
        <img src={formInput.image} alt={formInput.name} />
        <p>{formInput.description}</p>
        <p>Price: ${formInput.price}</p>
        <p>Category: {formInput.category}</p>
        <button onClick={handleUpdate}>Edit</button>
        <button onClick={deleteItem}>Delete</button>
        <Link to="/"><button>Back to Item List</button></Link>
      </div>
    );
  } else if (update) {
    return (
      <>
        <form onSubmit={updateItem}>
          <div>Edit Item</div>
          <input
            name="name"
            type="text"
            value={formInput.name}
            placeholder={formInput.name}
            onChange={handleChange}
          />
          <input
            name="description"
            type="text"
            value={formInput.description}
            onChange={handleChange}
          />
          <input
            name="price"
            type="text"
            value={formInput.price}
            onChange={handleChange}
          />
          <input
            name="category"
            type="text"
            value={formInput.category}
            onChange={handleChange}
          />
          <input
            name="image"
            type="url"
            value={formInput.image}
            onChange={handleChange}
          />
          <button type="submit">Submit Changes</button>
        </form>
      </>
    );
  }
};

export default Items;
