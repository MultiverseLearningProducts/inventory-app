import React from 'react';

const Items = ({ item }) => {
  if (!item) return <div>No item details to show</div>;

  return (
    <div className="item-details">
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.name} />
      <p>{item.description}</p>
      <p>Price: ${item.price / 100}</p>
      <p>Category: {item.category}</p>
    </div>
  );
};

export default Items;