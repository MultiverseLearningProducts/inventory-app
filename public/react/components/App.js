import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ItemsList } from "./ItemsList";  // Component for displaying all items
import SingleItem from "./SingleItemView";    // Component for displaying single item details
import apiURL from "../api";              // API base URL

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
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
    <Router>
      <main>
        <h1>Items Store</h1>
        <h2>All things 🔥</h2>
        <Switch>
          {/* Route for the list of all items */}
          <Route exact path="/">
            <ItemsList items={items} />
          </Route>

          {/* Route for viewing a single item */}
          <Route path="/items/:id">
            <SingleItem />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};
