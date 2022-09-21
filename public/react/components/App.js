import React, { useState, useEffect } from "react";
import { ItemsList } from "./ItemsList";
import { ItemInfo } from "./ItemInfo";
import Form from "./Form";
import "./all-items.css";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [items, setItems] = useState([]);
  const [itemInformation, setItemInformation] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState(""); // useState hook
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");


  async function submitHandler(e) {
    e.preventDefault();
    const itemObj = { title, category, price, description, image };

    const res = await fetch(`${apiURL}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemObj),
    });
    const data = await res.json();
    fetchItems();
    setShowForm(false);
  }

  async function fetchItems() {
    try {
      const response = await fetch(`${apiURL}/items`);
      const itemsData = await response.json();

      setItems(itemsData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  async function fetchItem(id) {
    try {
      const response = await fetch(`${apiURL}/items/${id}`);
      const itemData = await response.json();

      setItemInformation(itemData);
    } catch (err) {
      console.log("Houston we have a problem! ", err);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <main>
      {!showForm ? (
        <>
          {
            !itemInformation ? (
              <>
              <section>
                <h1>Item Inventory</h1>
                <h2>All things 🔥</h2>
                <article className="list-container">
                <ItemsList fetchItem={fetchItem} items={items} />
                </article>
                <div>
                  <button onClick={() => setShowForm(true)}>
                    Add a new item
                  </button>
                </div>
                </section>
              </>
            ) : (
              <ItemInfo
                fetchItem={fetchItem}
                fetchItems={fetchItems}
                setItemInformation={setItemInformation}
                item={itemInformation}
              />
            )

            // <h1>Hello World </h1>
          }
        </>
      ) : (
        <Form
          submitHandler={submitHandler}
          fetchItems={fetchItems}
          setShowForm={setShowForm}
          apiURL={apiURL}
          title={title}
          setTitle={setTitle}
          category={category}
          setCategory={setCategory}
          price={price}
          setPrice={setPrice}
          image={image}
          setImage={setImage}
          description={description}
          setDescription={setDescription}
        />
      )}
    </main>
  );
};
