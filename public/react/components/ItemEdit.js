import React, { useState } from "react";
import "../itemedit.css";
import apiURL from "../api";

function ItemEdit({ item, setIsEdit, fetchItems, isEdit }) {
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const [cat, setCat] = useState(item.category);
  const [price, setPrice] = useState(item.price);

  async function updateItem(e) {
    const response = await fetch(`${apiURL}/items/${item.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        category: cat,
        price: price,
      }),
    });
    const data = await response.json();
    fetchItems();
  }

  function handleSubmit(e) {
    e.preventDefault();

    updateItem(e);
  }

  return (
    <div className="itemDetailsContainer">
      <img className="itemimage" src={item.image} />
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="formelements">
          <input
            className="itemedittitle"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={item.title}
          ></input>
          <textarea
            className="itemeditdescription"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={item.description}
          ></textarea>
          <input
            name="cat"
            className="itemeditcat"
            value={cat}
            onChange={(e) => setCat(e.target.value)}
            placeholder={item.category}
          ></input>
          <input
            name="price"
            className="itemeditprice"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder={item.price}
          ></input>
          <button className="canceledit" onClick={() => setIsEdit(false)}>
            cancel
          </button>
          <button className="submitedit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ItemEdit;
