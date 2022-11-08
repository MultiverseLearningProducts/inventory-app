import React, { useState } from "react";
import apiURL from "../api";

export const AddForm = (props) => {

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

  console.log(itemData);

  const addItem = async () => {
    const res = await fetch(`${apiURL}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    });
    const data = await res.json();

    props.setItems([
      ...props.item, data
    ])
  }

  const postItem = async () => {
		try {
			const res = await fetch(`${apiURL}/items`,{
				method: "POST",
  				headers: {'Content-Type': 'application/json'},
  				body: JSON.stringify(itemData)
			});
			const newData = await res.json();
			props.setItems([...props.item, newData]);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

  const handleSubmit =  (ev) => {
    ev.preventDefault();
    postItem();
    setTitle("");
    setPrice("");
    setDescription("");
    setCategory("");
    setImage("");
    props.setbuttonClick(false);
    props.fetchItems();
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
