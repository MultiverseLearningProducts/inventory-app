import React, { useEffect } from "react";

export const Item = ({item, fetchItem}) => {
  return (
    <>
      <h3>{item.title}</h3>
      <button onClick={() => fetchItem(id)}>More info</button>
      {/* <img src={props.item.image} alt={props.item.title} /> */}
    </>
  );
};
