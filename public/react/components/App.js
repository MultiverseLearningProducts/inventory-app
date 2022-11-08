import React, { useState, useEffect } from "react";
import { SaucesList } from "./SaucesList";
import { ItemsList } from "./ItemsList";
import { useRef } from "react";

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

  const ref = useRef()
  const scroll = (scrolloffset) => {
    ref.current.scrollLeft += scrolloffset
  }

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
      <h1 className="Header1">Fectory Goods.</h1>
      <h2 className="Header2" >Our Products</h2>
      <br/>
      {individualItem ? (
        <>
          <h3>{individualItem.title}</h3>
          <br/>
          <img className="singleImg" src={individualItem.image}></img>
          <br/>
          <p className="categorystyle">-{individualItem.category}-</p>
          <br/>
          <p className="description">{individualItem.description}</p>
          <br/>
          <p className="pricestyle">{individualItem.price} $ </p>
          <br/>
          <button
            className="buttonDelete"
            onClick={() => {
              deleteItem(individualItem.id);
            }}>
            Delete
          </button>
          
          <button className='gobackButton' onClick={() => goBack()}>Go Back</button>
        
          <button className="editButton" onClick={() => editFormClick()}>Update Item</button>
        </>
      ) : addItems ? (
        <>
          <form className="formstyle" onSubmit={handleSubmit}>
            <input
              className="inputs"
              type="text"
              placeholder="Title"
              aria-label="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <br/>
            <input
              className="inputs"
              type="text"
              placeholder="Description"
              aria-label="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            <br/>
            <input
              className="inputs"
              type="text"
              placeholder="Price"
              aria-label="price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
            <br/>
            <input
              className="inputs"
              type="text"
              placeholder="Category"
              aria-label="category"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            />
            <br/>
            <input
              className="inputs"
              type="text"
              placeholder="Image URL"
              aria-label="image"
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />
            <br/>
            <button className="buttonSubmit" type="submit">
              Submit
            </button>
            <br/>
            <button className='gobackButton' onClick={() => goBack()}>Go Back</button>
          </form>
        </>
      ) : editedForm ? <>
      <form className="formstyle" onSubmit={() => updatedFormSubmit(formData.id)}>
      <input
        className="inputs"
        type="text"
        placeholder={title}
        aria-label="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <br/>
      <input
        className="inputs"
        type="text"
        placeholder={description}
        aria-label="description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <br/>
      <input
        className="inputs"
        type="text"
        placeholder={price}
        aria-label="price"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
      <br/>
      <input
        className="inputs"
        type="text"
        placeholder={category}
        aria-label="category"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      />
      <br/>
      <input
        className="inputs"
        type="text"
        placeholder={image}
        aria-label="image"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <br/>
      <button className="buttonSubmit" type="submit">
        Submit
      </button>
      <br/>
      <button className='gobackButton' onClick={() => goBack()}>Go Back</button>
    </form>
        </> : (
        <>
        <div className="spacer"></div>
        <h1 className="carouselTitle"> MOST POPULAR </h1>
        <section className="container">
          <button id="carouselButtonLeft" onClick={() => scroll(-500)}></button>
          <div className="wrapper" ref={ref}>
            <ItemsList handleClick={handleClick}
            items={items}
            individualItem={individualItem}
            setIndividualItem={setIndividualItem} />
          </div>
          <button id="carouselButtonRight" onClick={() => scroll(500)}></button>
        </section>
        <button className="addButton" onClick={() => formClick()}>Add Item</button>
        </>
      )}
    </main>
  );
};
