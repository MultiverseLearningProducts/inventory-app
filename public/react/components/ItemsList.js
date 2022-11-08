import React, { useState } from "react";
import { Item } from "./Item";
import { AddForm } from "./AddForm";

export const ItemsList = ({ items, setItems, singleItem, setSingleItem }) => {
  const [addbuttonClick, setbuttonClick] = useState(false);
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
      <button onClick={setbuttonClick(true)}>Add Item</button>
      {addbuttonClick ? 
    <AddForm addbuttonClick = {addbuttonClick} setbuttonClick = {setbuttonClick}/> : null}
    </div>
  );
};
