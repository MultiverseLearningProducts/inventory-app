import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import { ItemsList } from "./ItemsList";
import { AddItem } from "./AddItem";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export function App() {
  const [items, setItems] = useState([]);

  async function fetchItems() {
    try {
      const response = await fetch(`${apiURL}/items`);
      const itemsData = await response.json();

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
      <Switch>
        <h1>Item Store</h1>
        <Route exact={true} path='/'>
          <ItemsList items={items} />
        </Route>
        <Route exact={true} path='/add'>
          <AddItem />
        </Route>
      </Switch>
    </main>
  );
}
