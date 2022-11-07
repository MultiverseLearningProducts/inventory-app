import React from "react";
import { Item } from "./Item";

export const ItemsList = ({ items, setItems, singleItem, setSingleItem }) => {

  const openForm = () => {
    return( 
      <Form/>
    )
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
    {
      buttonClick ? return (
        <Form setbuttonClick ={setbuttonClick} fetchPages={fetchPages}/>
      )
    }
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
      <button onClick={openForm}> 
        Add item 
      </button>
    </div>
  
  );
};
