import React from "react";
import { Item } from "./Item";

export const ItemsList = ({ items, setItems, singleItem, setSingleItem, fetchItems }) => {
  return singleItem ? (
    <div>
      {singleItem.map((item, idx) => {
        return (
          <Item
            item={item}
            setItems={setItems}
            singleItem={singleItem}
            setSingleItem={setSingleItem}
            key={idx}
            fetchItems={fetchItems}
          />
        );
      })}
    </div>
  ) : (
    <div id="itemList">
      {items.map((item, idx) => {
        return (
          <Item
            item={item}
            setItems={setItems}
            setSingleItem={setSingleItem}
            key={idx}
            fetchItems={fetchItems}
          />
        );
      })}
    </div>
  );
};
