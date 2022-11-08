import React, { useState } from "react";
import apiURL from "../api";

export const AddForm = (props) => {
  console.log("what is props", props);
  const [itemtitle, setItemtitle] = useState("");
  const [itemprice, setItemprice] = useState("");
  const [itemdescription, setItemdescription] = useState("");
  const [itemcategory, setItemcategory] = useState("");
  const [itemimage, setItemimage] = useState("");

  const itemData = {
    itemtitle: itemtitle,
    itemprice: itemprice,
    itemdescription: itemdescription,
    itemcategory: itemcategory,
    itemimage: itemimage,
  };

  const addItem = async () => {
    const res = await fetch(`${apiURL}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    });
    const data = await res.json();
    props.setItems([
      ...props.items, data
    ])
  }

  const handleSubmit =  (ev) => {
    ev.preventDefault();
    addItem();

    setItemtitle("");
    setItemprice("");
    setItemdescription("");
    setItemcategory("");
    setItemimage("");
    props.setbuttonClick(false);
    // props.fetchItems();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="title"
        value={itemtitle}
        onChange={(ev) => setItemtitle(ev.target.value)}
      />

      <input
        type="number"
        placeholder="price"
        value={itemprice}
        onChange={(ev) => setItemprice(ev.target.value)}
      />

      <input
        type="text"
        placeholder="description"
        value={itemdescription}
        onChange={(ev) => setItemdescription(ev.target.value)}
      />

      <input
        type="text"
        placeholder="category"
        value={itemcategory}
        onChange={(ev) => setItemcategory(ev.target.value)}
      />

      <input
        type="text"
        placeholder="image"
        value={itemimage}
        onChange={(ev) => setItemimage(ev.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
};
