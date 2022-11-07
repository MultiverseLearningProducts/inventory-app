import React, { useState, useEffect } from "react";
import { SaucesList } from "./SaucesList";
import Header from "./Header";
import Cart from "./Cart";
import Inventory from "./Inventory";
import ItemDetail from "./ItemDetail";
import { AppBar, Typography, Button } from "@mui/material";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

function App() {
  const [checkItems, setCheckItems] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);
  console.log(showDetails);

  async function fetchItems() {
    const response = await fetch(`${apiURL}/items`);
    const data = await response.json();
    setItems(data);
  }

  useEffect(() => {
    fetchItems();
  }, []);

  console.log(selectedItem);

  return (
    <div>
      <Header
        setCheckItems={setCheckItems}
        // setShowDetails={setShowDetails}
      />
      <div className={checkItems === false ? "" : "hideMe"}>
        <Cart
          // setShowDetails={setShowDetails}
          items={items}
          setItems={setItems}
        />
      </div>
      <div
        className={checkItems === false || showDetails === true ? "hideMe" : ""}
      >
        <Inventory
          setCheckItems={setCheckItems}
          setShowDetails={setShowDetails}
          items={items}
          setSelectedItem={setSelectedItem}
        />
      </div>
      <div className={showDetails === false ? "hideMe" : ""}>
        <ItemDetail setShowDetails={setShowDetails} item={selectedItem} />
      </div>
    </div>
  );
}

export default App;
