import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
  Link
} from "react-router-dom";
import Items from "./Items";
import ItemsList from "./ItemsList";
import apiURL from "../api";
import AddItem from "./AddItem";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [itemList, setItemList] = useState([]);

  // Fetch all items from the backend
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${apiURL}/items`);
        if (response.ok) {
          const data = await response.json();
          setItemList(data);
        } else {
          throw new Error("Failed to load items");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [itemList]);

  const handleAddItem = async (newItem) => {
    setItemList([newItem, ...itemList]);
  };

  if (loading) return <div>Loading items...</div>;
  if (error) return <div>Error: {error}</div>;


  return (
    <main className="App">
      <Router>
        <header>
          <Link to="/add-item">
            <button> Add New Item </button>
          </Link>
        </header>
        {/* <header> <button onClick={() => navigate('add-item')}>Add New Item</button> </header> */}
        <Routes>
          {/* Pass the item list to ItemsList */}
          <Route exact path="/" element={<ItemsList items={itemList} />} />
          {/* Use SingleItemWrapper to fetch and display single item */}
          <Route path="/items/:id" element={<SingleItemWrapper />} />
          <Route
            path="/add-item"
            element={<AddItem addOnItem={handleAddItem} />}
          />
        </Routes>
      </Router>
    </main>
  );
};

// Wrapper component to handle single item fetching by ID
const SingleItemWrapper = () => {
  const { id } = useParams();
  const [singleItem, setSingleItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the single item when the ID changes
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`${apiURL}/items/${id}`);
        if (response.ok) {
          const data = await response.json();
          setSingleItem(data);
        } else {
          throw new Error("Item not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return <Items item={singleItem} />;
};

export default App;
