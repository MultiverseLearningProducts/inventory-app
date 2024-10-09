import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useParams, Link } from 'react-router-dom';
import apiURL from "../api";

const AddItem = ({ addOnItem }) => {
  const [formInput, setFormInput] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    imageUrl: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(`${apiURL}/`, {
        method: "POST",
        headers: { "Content type": "application/json" },
        body: JSON.stringify(formInput),
      });

      if (!response.ok) {
        throw new Error("Item has not been added");
      }
      const data = await response.json();
      console.log("Item has been added successfully", data);
      addOnItem(data);
      setFormInput({
        name: "",
        description: "",
        price: "",
        category: "",
        imageUrl: "",
      });
    } catch (error) {
      console.log("error adding item", error);
    }
  }

  return (
    <div className="add-item-container">
      <form onSubmit={handleSubmit} className="add-item-form">
        <h2>Add Your Item</h2>
        <label>
          <input
            type="text"
            name="name"
            value={formInput.name}
            onChange={handleChange}
            placeholder="Item Name"
            required
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={formInput.description}
            onChange={handleChange}
            placeholder="Description"
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={formInput.price}
            onChange={handleChange}
            placeholder="Price"
            required
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={formInput.category}
            onChange={handleChange}
            placeholder="Category"
            required
          />
        </label>
        <label>
          Image URL:
          <input
            type="url"
            name="imageUrl"
            value={formInput.imageUrl}
            onChange={handleChange}
            placeholder="Image URL"
            required
          />
        </label>
        <button type="submit">Submit Your Item</button>
      </form>
      <Link to="/"><button>Back to Item List</button></Link>
    </div>
  );
};

export default AddItem;
