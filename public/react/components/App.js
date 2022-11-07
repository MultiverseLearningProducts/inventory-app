import React, { useState, useEffect } from "react";
import { SaucesList } from "./SaucesList";
import Header from "./Header";
import Cart from "./Cart";
import Inventory from "./Inventory";
import { AppBar, Typography, Button } from "@mui/material";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

function App() {
  const [checkItems, setCheckItems] = useState(false);

  const [items, setItems] = useState([]);

  async function fetchItems() {
    const response = await fetch(`${apiURL}/items`);
    const data = await response.json();
    setItems(data);
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <Header setCheckItems={setCheckItems} />
      <div className={checkItems === false ? "" : "hideMe"}>
        <Cart items={items} setItems={setItems} />
      </div>
      <div className={checkItems === false ? "hideMe" : ""}>
        <Inventory items={items} />
      </div>
    </div>
  );
}

export default App;
