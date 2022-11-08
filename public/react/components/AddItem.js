import React, { useState } from "react";
import apiURL from "../api";
import "../itemadd.css";

function AddItem({ item, fetchItems, isAdd, setIsAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cat, setCat] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);

  async function Add(e) {
    const response = await fetch(`${apiURL}/items/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        category: cat,
        image: image,
        price: price,
      }),
    });
    fetchItems();
  }

  function handleSubmit(e) {
    e.preventDefault();

    Add(e);
    setIsAdd(false);
    fetchItems();
  }

  return (
    <div className="itemDetailsContainer">
      <img className="imagepreview" src={image} />
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="formelements">
          <input
            className="itemimage"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="image link"
          ></input>
          <input
            className="itemaddtitle"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          ></input>
          <textarea
            className="itemadddescription"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          ></textarea>
          <input
            name="cat"
            className="itemaddcat"
            value={cat}
            onChange={(e) => setCat(e.target.value)}
            placeholder="Category"
          ></input>
          <input
            name="price"
            className="itemaddprice"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
          ></input>
          <button className="canceladd" onClick={() => setIsAdd(false)}>
            cancel
          </button>
          <button className="submitadd" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddItem;
