import React, { useState } from "react";
import apiURL from "../api";

export const AddForm = ({ props }) => {
  const [itemtitle, setItemtitle] = useState("");
  const [itemprice, setItemprice] = useState("");
  const [itemdescription, setItemdescription] = useState("");
  const [itemcategory, setItemcategory] = useState("");
  const [itemimage, setItemimage] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    // call Api and Fetch Api
    console.log(itemtitle, itemprice, itemdescription, itemcategory, itemimage);
    setItemtitle("");
    setItemprice("");
    setItemdescription("");
    setItemcategory("");
    setItemimage("");
    props.setbuttonClick(false);
  };

  return (
    <form onClick={handleSubmit}>
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
