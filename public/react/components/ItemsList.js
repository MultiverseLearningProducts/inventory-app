import React from "react";
import { Items } from "./Items";

export const ItemsList = ({ items }) => {
  return (
    <>
      {items.map((items, idx) => {
        return <Items items={items} key={idx} />;
      })}
    </>
  );
};
