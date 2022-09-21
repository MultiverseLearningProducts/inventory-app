import React, { useEffect, useState } from "react";
import apiURL from "../api";
import Form from "./Form";

export const ItemInfo = ({ item, setItemInformation, fetchItems, fetchItem }) => {
  const [title, setTitle] = useState(""); // useState hook
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [update, setUpdate] = useState(false)

  async function submitHandler(e) {
    e.preventDefault();
    const itemObj = { title, category, price, description, image };

    const res = await fetch(`${apiURL}/items/${item.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemObj),
    });
    const data = await res.json();
    fetchItem(item.id)
    fetchItems();
    setUpdate(false);
  }

  async function deleteSingleItem() {
    const res = await fetch(`${apiURL}/items/${item.id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    setItemInformation("");
    fetchItems();
  }

  return (
    <main>
      {!update?<><h1>{item.title}</h1>
      <h3>Price: {item.price}</h3>
      <p>{item.description}</p>
      <p>{item.category}</p>
      <img src={item.image}></img>
      <button onClick={() => setItemInformation("")}>Back</button>
      <button onClick={deleteSingleItem}>Remove Item</button>
      <button onClick={() => setUpdate(true)}>Update Item</button></>:<Form submitHandler={submitHandler}
          fetchItems={fetchItems}
          setShowForm={setUpdate}
          title={title}
          setTitle={setTitle}
          category={category}
          setCategory={setCategory}
          price={price}
          setPrice={setPrice}
          image={image}
          setImage={setImage}
          description={description}
          setDescription={setDescription}/>}
    </main>
  );
};
