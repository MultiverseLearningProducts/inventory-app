import React from 'react';
import { Link } from 'react-router-dom';

const ItemsList = ({ items }) => {
  if (!items || items.length === 0) return <div>No items available</div>;

  return (
    <div className="items-container">
      <h1>Inventory</h1>
      <div className="items-grid">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <img src={item.image} alt={item.name} className="item-image" />
            <h2>{item.name}</h2>
            <p>Price: ${item.price / 100}</p>
            <p>Category: {item.category}</p>
            <Link to={`/items/${item.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsList;