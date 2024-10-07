import React, { useEffect, useState } from 'react';
import apiURL from '../api';

const AllItemsView = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch items from backend
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${apiURL}/items`);
        const data = await response.json();
        setItems(data);
        setLoading(false);
      } catch (error) {
        setError('Failed to load items');
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) {
    return <div>Loading items...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="items-container">
      <h1>Inventory</h1>
      <div className="items-grid">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <img src={item.image} alt={item.name} className="item-image" />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Price: ${item.price / 100}</p>
            <p>Category: {item.category}</p>
            <button onClick={() => window.location.href = `/items/${item.id}`}>
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllItemsView;