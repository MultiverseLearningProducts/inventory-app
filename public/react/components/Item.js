import React, { useEffect } from "react";

export const Item = ({ item, fetchItem }) => {
  return (
    <>
      <h3>{item.title}</h3>
      <button onClick={() => fetchItem(item.id)}>More info</button>
    </>
  );
};
