import React from 'react';

export const Item = ({item, isSinglePageView, setSinglePageView, setItemObjectTitle}) => {

  const handleItemClick = () => {
    setSinglePageView(!isSinglePageView);
    setItemObjectTitle(item.title);
  }

  return <>
    <h3>{item.title}</h3>
    <img src={item.image} alt={item.title} />
    <p>{item.price}</p>
    <p>{item.description}</p>
    <button onClick={handleItemClick}>{item.id}</button>
  </>
} 