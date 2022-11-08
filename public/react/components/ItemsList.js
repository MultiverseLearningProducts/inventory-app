import React, { useState } from "react";
import { Item } from "./Item";
import { AddForm } from "./AddForm";

export const ItemsList = ({ items, props, setItems, singleItem, setSingleItem }) => {
  const [addbuttonClick, setbuttonClick] = useState(false);
  const handleClick = () => {
    setbuttonClick(true);
  }
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
          />
        );
      })}
      <button onClick={handleClick}>Add Item</button>
      {addbuttonClick ? 
    <AddForm props={props}/> : null}
    </div>
  );
};
