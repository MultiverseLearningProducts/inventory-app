import React from "react";
import { Link } from "react-router-dom";

const ItemsList = ({ items }) => {
  if (!items || items.length === 0) return <div>No items available</div>;

  return (
    <div className="items-container">
      <h1>Inventory</h1>
      <div className="items-grid">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <Link to={`/items/${item.id}`} className="item-link">
              <div className="item-content">
                <div className="front-flip">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="item-image"
                  />
                  <h2 className="item-name">{item.name}</h2>
                  <p className="item-price">Price: ${Math.round(item.price *100)/100}</p>
                  <p className="item-category">Category: {item.category}</p>
                </div>
                <div className="back-flip">
                  <p className="item-description">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
            <div className="button-container">
              <Link to={`/items/${item.id}`}>
                <button className="view-details-button">View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsList;
