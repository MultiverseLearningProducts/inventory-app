import React, { useState, useEffect } from "react";
import { SaucesList } from "./SaucesList";
import Header from "./Header";
import Cart from "./Cart";
import Inventory from "./Inventory";
import ItemDetail from "./ItemDetail";
import ItemEdit from "./ItemEdit";
import AddItem from "./AddItem";
import { AppBar, Typography, Button } from "@mui/material";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

function App() {
  const [checkItems, setCheckItems] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

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
        setShowDetails={setShowDetails}
        setIsAdd={setIsAdd}
      />
      <div className={checkItems === false ? "" : "hideMe"}>
        <Cart
          // setShowDetails={setShowDetails}
          items={items}
          setItems={setItems}
        />
      </div>
      <div
        className={
          checkItems === false || showDetails === true || isAdd === true
            ? "hideMe"
            : ""
        }
      >
        <Inventory
          setIsAdd={setIsAdd}
          setCheckItems={setCheckItems}
          setShowDetails={setShowDetails}
          items={items}
          setSelectedItem={setSelectedItem}
          fetchItems={fetchItems} 
        />
      </div>


      <div className={isAdd === false ? "hideMe" : ""}>
        <AddItem
          item={selectedItem}
          fetchItems={fetchItems}
          isAdd={isAdd}
          setIsAdd={setIsAdd}
        />
      </div>

<div className={showDetails === false ? "hideMe" : ""}>
        <div className={isEdit === false ? "" : "hideMe"}>
          <ItemDetail
            items={items}
            setShowDetails={setShowDetails}
            selectedItem={selectedItem}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            fetchItems={fetchItems}
          />
        </div>
        <div className={isEdit === false ? "hideMe" : ""}>
          <ItemEdit
            item={selectedItem}
            fetchItems={fetchItems}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
          />
        </div>

      </div>
    </div>
  );
}

export default App;
