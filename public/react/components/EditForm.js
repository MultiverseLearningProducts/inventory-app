import React, { useState } from "react";
import apiURL from "../api";

export const EditForm = ({ props }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0.0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const itemData = {
    title: title,
    price: price,
    description: description,
    category: category,
    image: image,
  };

  const updateSingleItem = async () => {
    try{
      const res = await fetch(`${apiURL}/items/${props.item.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemData),
      });
      const data = await res.json();
      props.setSingleItem([data]);
      
    }catch(err){
      console.log("Oh no an error! ", err)
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateSingleItem();

    setTitle("");
    setPrice("");
    setDescription("");
    setCategory("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="Price"
        name="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Category"
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Image URL"
        name="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <br />
      <button className="button" type="submit">Submit Changes</button>
    </form>
  );
};
