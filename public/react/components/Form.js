// section,  div,
import React from "react";
import { useState } from "react";
import "./style.css";

const Form = () => {
  const [title, setTitle] = useState(""); // useState hook
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    console.log("Title: " + title);
    console.log("Category: " + category);
    console.log("Price: " + price);
    console.log("Description: " + description);
  }

  return (
    <form>
      <section>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Enter the text"
        />
      </section>
      <section>
        <label>Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter the category"
        />
      </section>
      <section>
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter the price"
        />
      </section>
      <section>
        <label>Description:</label>
        <textarea
          row="5"
          cols="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter the price"
        />
      </section>
      <section>
        <label>Select any image:</label>
        <input type="file" />
      </section>
      <input type="submit" value="Submit" onClick={submitHandler} />
    </form>
  );
};

export default Form;
