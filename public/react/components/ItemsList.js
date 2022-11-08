import React, { useState } from "react";
import { Item } from "./Item";
import { AddForm } from "./AddForm";

export const ItemsList = ({ items, setItems, singleItem, setSingleItem, fetchItems }) => {

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
      <button className="button" onClick={handleClick}>Add Item</button>
      {addbuttonClick ? 
    <AddForm setbuttonClick={setbuttonClick} items={items} setItems={setItems} fetchItems={fetchItems}/> : null}
    </div>
  );
};
