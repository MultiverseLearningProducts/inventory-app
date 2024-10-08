import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 

const SingleItem = () => {
  const { id } = useParams();  // Get the item ID from the URL
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`/api/items/${id}`);
        if (response.ok) {
          const data = await response.json();
          setItem(data);
        } else {
          throw new Error('Item not found');
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
  if (error) return <div>Error: {error}</div>;

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

export default SingleItem;