// section,  div,
import React from "react";
import { useState } from "react";
import "./style.css";
const Form = ({ submitHandler, title, setTitle, category, setCategory, image, setImage, price, setPrice, description, setDescription }) => {

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
