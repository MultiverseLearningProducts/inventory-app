import React, { useState, useEffect } from "react";
import { ItemsList } from "./ItemsList";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [items, setItems] = useState([]);
  const [singleItem, setSingleItem] = useState(null);

  async function fetchItems() {
    try {
      const response = await fetch(`${apiURL}/items`);
      const itemsData = await response.json();
      setSingleItem(null);
      setItems(itemsData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <main>
      <h1>Items Store</h1>

      <h2 onClick={fetchItems}>All things 🔥</h2>
      <ItemsList
        items={items}
        setItems={setItems}
        singleItem={singleItem}
        setSingleItem={setSingleItem}
		fetchItems={fetchItems}
      />
    </main>
  );
};
