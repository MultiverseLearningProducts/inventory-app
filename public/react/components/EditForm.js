import e from "cors";
import React, { useState } from "react";
import apiURL from "../api";

export const EditForm = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState()
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${apiURL}/items/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: e.target.title.value,
        price: e.target.price.value,
        description: e.target.description.value,
        category: e.target.category.value,
        image: e.target.image.value,
      }),
    });
    const data = res.json();
    setTitle("");
    setPrice("");
    setDescription("");
    setCategory("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <input
        type="text"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)} />
      <button type="submit">Submit Changes</button>
    </form>
  );
};
