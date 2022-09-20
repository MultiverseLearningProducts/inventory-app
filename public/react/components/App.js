import React, { useState, useEffect } from "react";
import { ItemsList } from "./ItemsList";
import { ItemInfo } from "./ItemInfo";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [items, setItems] = useState([]);
  const [itemInformation, setItemInformation] = useState("");

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
      {
        !itemInformation ? (
          <>
            <h1>Item Inventory</h1>
            <h2>All things 🔥</h2>
            <ItemsList fetchItem={fetchItem} items={items} />
          </>
        ) : (
          <ItemInfo
            fetchItems={fetchItems}
            setItemInformation={setItemInformation}
            item={itemInformation}
          />
        )
        // <h1>Hello World </h1>
      }
    </main>
  );
};
