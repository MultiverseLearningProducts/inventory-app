import React, { useState, useEffect } from "react";
import { SaucesList } from "./SaucesList";
import { ItemsList } from "./ItemsList";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [sauces, setSauces] = useState([]);
  const [items, setItems] = useState([]);
  const [individualItem, setIndividualItem] = useState(false);
  const [addItems, setAddingItems] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  async function fetchSauces() {
    try {
      const response = await fetch(`${apiURL}/sauces`);
      const saucesData = await response.json();

      setSauces(saucesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  async function fetchItems() {
    try {
      const res = await fetch(`${apiURL}/items`);
      const itemsData = await res.json();
      setItems(itemsData);
    } catch (error) {
      console.log(error);
    }
  }

  const handleClick = async (id) => {
    const res = await fetch(`${apiURL}/items/${id}`);
    const data = await res.json();
    setIndividualItem(data);
  };

  const formClick = () => {
    setAddingItems(true);
  };

  const newItem = {
    title: title,
    description: description,
    price: price,
    category: category,
    image: image,
  };

  const handleSubmit = () => {
    postRequest();
    fetchItems();
    setAddingItems(false);
  };

  const postRequest = async () => {
    const res = await fetch(`${apiURL}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });
    const data = await res.json();
  };

  useEffect(() => {
    fetchSauces();
    fetchItems();
  }, []);

  return (
    <main>
      <h1>Sauce Store</h1>
      <h2>All things 🔥</h2>
      {individualItem ? (
        <>
          <h3>{individualItem.title}</h3>
          <img src={individualItem.image}></img>
          <p>{individualItem.description}</p>
          <p>{individualItem.price}</p>
          <p>{individualItem.category}</p>
        </>
      ) : addItems ? (
        <>
          <form onSubmit={handleSubmit}>
            <input
              className="inputs"
              type="text"
              placeholder="Title"
              aria-label="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <input
              className="inputs"
              type="text"
              placeholder="Description"
              aria-label="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            <input
              className="inputs"
              type="text"
              placeholder="Price"
              aria-label="price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
            <input
              className="inputs"
              type="text"
              placeholder="Category"
              aria-label="category"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            />
            <input
              className="inputs"
              type="text"
              placeholder="Image"
              aria-label="image"
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />
            <button className="buttonSubmit" type="submit">
              Submit
            </button>
          </form>
        </>
      ) : (
        <>
          <button onClick={() => formClick()}>Add Item</button>
          <ItemsList
            handleClick={handleClick}
            items={items}
            individualItem={individualItem}
            setIndividualItem={setIndividualItem}
          />
        </>
      )}
    </main>
  );
};
