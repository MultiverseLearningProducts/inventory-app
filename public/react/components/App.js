import React, { useState, useEffect } from "react";
import { SaucesList } from "./SaucesList";
import { ItemsList } from "./ItemsList";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [sauces, setSauces] = useState([]);
  const [items, setItems] = useState([]);
  const [individualItem, setIndividualItem] = useState(false);
  const [formData, setFormData] = useState('')
  const [editedForm, setEditedForm] = useState(false)
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

  const editFormClick = () => {
    setFormData(individualItem)
    setTitle(individualItem.title)
    setDescription(individualItem.description)
    setPrice(individualItem.price)
    setCategory(individualItem.category)
    setImage(individualItem.image)
    console.log(formData)
    setIndividualItem(false)
    setEditedForm(true)
  }

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

  const deleteItem = async (id) => {
    const response = await fetch(`${apiURL}/items/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    goBack();
  };

  const updateItem = async (id) => {
    const response = await fetch(`${apiURL}/items/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        description: description,
        price: price,
        category: category,
        image: image
      })
    })
    const data = await response.json()
  }

  const updatedFormSubmit = (id) => {
    updateItem(id)
    setTitle('');
    setDescription('');
    setPrice('');
    setCategory('');
    setImage('');
    fetchItems()
    setEditedForm(false)
  }

  const goBack = async () => {
    fetchItems();
    setIndividualItem(false);
  };

  useEffect(() => {
    fetchSauces();
    fetchItems();
  }, []);

  return (
    <main className="main">
      <h1>Goods</h1>
      <h2>Our Products</h2>
      <br/>
      {individualItem ? (
        <>
          <h3>{individualItem.title}</h3>
          <img className="singleImg" src={individualItem.image}></img>
          <p>{individualItem.description}</p>
          <p>{individualItem.price}</p>
          <p>{individualItem.category}</p>
          <button
            className="buttonDelete"
            onClick={() => {
              deleteItem(individualItem.id);
            }}>
            Delete
          </button>
          <button className='gobackButton' onClick={() => goBack()}>Go Back</button>
          <button className="editButton" onClick={() => editFormClick()}>Edit Form</button>
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
      ) : editedForm ? <>
      <form onSubmit={() => updatedFormSubmit(formData.id)}>
      <input
        className="inputs"
        type="text"
        placeholder={title}
        aria-label="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        className="inputs"
        type="text"
        placeholder={description}
        aria-label="description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <input
        className="inputs"
        type="text"
        placeholder={price}
        aria-label="price"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
      <input
        className="inputs"
        type="text"
        placeholder={category}
        aria-label="category"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      />
      <input
        className="inputs"
        type="text"
        placeholder={image}
        aria-label="image"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <button className="buttonSubmit" type="submit">
        Submit
      </button>
    </form>
        </> : (
        <>
          <button className="addButton" onClick={() => formClick()}>Add Item</button>
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
