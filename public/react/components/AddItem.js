import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useParams, Link } from 'react-router-dom';
import apiURL from "../api";

const AddItem = ({ addOnItem }) => {
  const [formInput, setFormInput] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  }

  useEffect(() => {
    console.log(formInput)  },[formInput])

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(`${apiURL}/items`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
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
        image: "",
      });
    } catch (error) {
      console.log("error adding item", error);
    }
  }

  return (
    <div className="add-item-container">
      <form onSubmit={handleSubmit} className="add-item-form">
        <h2 className="form-title">Add Your Item</h2>
        <p className="form-subtitle">Please fill out to add your item!</p>
        <label className="form-label">
          Name:
          <input
            type="text"
            name="name"
            value={formInput.name}
            onChange={handleChange}
            placeholder="Item Name"
            required
            className="form-input"
          />
        </label>
        <label className="form-label">
          Description:
          <input
            type="text"
            name="description"
            value={formInput.description}
            onChange={handleChange}
            placeholder="Description"
            required
            className="form-input"
          />
        </label>
        <label className="form-label">
          Price:
          <input
            type="number"
            name="price"
            value={formInput.price}
            onChange={handleChange}
            placeholder="Price"
            required
            className="form-input"
          />
        </label>
        <label className="form-label">
          Category:
          <input
            type="text"
            name="category"
            value={formInput.category}
            onChange={handleChange}
            placeholder="Category"
            required
            className="form-input"
          />
        </label>
        <label className="form-label">
          Image
          <input
            type="text"
            name="image"
            value={formInput.image}
            onChange={handleChange}
            placeholder="Image URL"
            required
             className="form-input"
          />
        </label>
        <button type="submit" className="form-button">Submit Your Item</button>
      </form>
      <Link to="/"><button className="back-button">Back to Item List</button></Link>
    </div>
  );
};

export default AddItem;
