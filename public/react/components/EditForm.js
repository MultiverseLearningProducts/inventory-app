import React, { useState } from "react";
import apiURL from "../api";

export const EditForm = ({ props }) => {
  console.log("what is props", props);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0.0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  //   const itemData = {
  //     title: title,
  //     price: price,
  //     description: description,
  //     category: category,
  //     image: image,
  //   };

//   const updateSingleItem = async (e) => {
   
//   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // updateSingleItem();
    const res = await fetch(`${apiURL}/items/${props.item.id}`, {
        method: "PUT",
        body: JSON.stringify({
          title: e.target.title.value,
          price: e.target.price.value,
          description: e.target.description.value,
          category: e.target.category.value,
          image: e.target.image.value,
        }),
      });
      console.log("what is res", res);
      const data = await res.json();
      console.log("what is data", data);
      props.setSingleItem([data]);
    console.log("what is singleitem", props.singleItem);
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
      <input
        type="number"
        placeholder="Price"
        name="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        name="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Submit Changes</button>
    </form>
  );
};
