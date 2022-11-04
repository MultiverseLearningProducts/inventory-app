import React, { useState, useEffect } from "react";
import { SaucesList } from "./SaucesList";
import { ItemsList } from "./ItemsList";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [sauces, setSauces] = useState([]);
  const [items, setItems] = useState([]);
  const [individualItem, setIndividualItem] = useState(false)


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
    const res = await fetch(`${apiURL}/items/${id}`)
    const data = await res.json()
    setIndividualItem(data)
  }


  useEffect(() => {
    fetchSauces();
    fetchItems();
  }, []);

  return (
    <main>
      <h1>Sauce Store</h1>
      <h2>All things 🔥</h2>
      {!individualItem ? <>
      {/* <SaucesList sauces={sauces} /> */}
      <ItemsList handleClick ={handleClick} items={items} individualItem={individualItem} setIndividualItem={setIndividualItem}/>
      </> : 
      <> <h3>{individualItem.title}</h3>
      <img src={individualItem.image}></img>
      <p>{individualItem.description}</p>
      <p>{individualItem.price}</p>
      <p>{individualItem.category}</p>
      </>}
      {/* <SaucesList sauces={sauces} />
      <ItemsList handleClick = {handleClick}items={items} /> */}
    </main>
  );
};
