import React, { useEffect } from "react";
import apiURL from "../api";

export const ItemInfo = ({ item, setItemInformation, fetchItems }) => {
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
      <h1>{item.title}</h1>
      <h3>Price: {item.price}</h3>
      <p>{item.description}</p>
      <p>{item.category}</p>
      <img src={item.image}></img>
      <button onClick={() => setItemInformation("")}>Back</button>
      <button onClick={deleteSingleItem}>Remove Item</button>
    </main>
  );
};
