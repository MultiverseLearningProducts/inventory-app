import React, { useState, useEffect } from "react";
import { SaucesList } from "./SaucesList";
import { ItemsList } from "./ItemsList";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [sauces, setSauces] = useState([]);
  const [items, setItems] = useState([]);


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

  useEffect(() => {
    fetchSauces();
    fetchItems();
  }, []);

  return (
    <main>
      <h1>Sauce Store</h1>
      <h2>All things 🔥</h2>
      <SaucesList sauces={sauces} />
      <ItemsList items={items} />
    </main>
  );
};
