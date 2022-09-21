import React from "react";
import { Item } from "./Item";

export const ItemsList = ({ fetchItem, items }) => {
  return (
    <>
      {items.map((item, idx) => {
        return <Item  fetchItem={fetchItem} item={item} key={idx} />;
      })}
    </>
  );
};
