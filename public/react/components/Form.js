// section,  div,
import React from "react";
import { useState } from "react";
import "./style.css";

const Form = ({ setShowForm, apiURL, fetchItems }) => {
  const [title, setTitle] = useState(""); // useState hook
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  async function submitHandler(e) {
    e.preventDefault();
    const itemObj = { title, category, price, description, image };

    const res = await fetch(`${apiURL}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemObj),
    });
    const data = await res.json();
    fetchItems();
    setShowForm(false);
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
        <label>Image:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Enter the Image"
        />
      </section>
      <section>
        <label>Description:</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter a description"
        />
      </section>
      {/* <section>
        <label>Select any image:</label>
        <input type="file" />
      </section> */}
      <input type="submit" value="Submit" onClick={submitHandler} />
    </form>
  );
};

export default Form;
