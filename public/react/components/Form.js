// section,  div,
import React from "react";
import { useState } from "react";
import "./style.css";
const Form = ({ submitHandler, title, setTitle, category, setCategory, image, setImage, price, setPrice, description, setDescription }) => {

  return (
    <section className="color">
    <form>
      <section class="form-group">
        <label for="exampleFormControlInput1"><strong>Title:</strong></label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Enter the text"
        />
      </section>
      <section class="form-group">
        <label for="exampleFormControlInput1"><strong>Category:</strong></label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter the category"
        />
      </section>
      <section class="form-group">
        <label for="exampleFormControlInput1"><strong>Price:</strong></label>
        <input
          type="number"
          class="form-control"
          id="exampleFormControlInput1"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter the price"
        />
      </section>
      <section class="form-group">
        <label for="exampleFormControlInput1"><strong>Image:</strong> </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Enter the Image"
        />
      </section>
      <section class="form-group">
        <label for="exampleFormControlInput1"><strong>Description:</strong> </label>
        <input
          class="form-control"
          id="exampleFormControlInput1"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter a description"
        />
      </section>
      {/* <section>
        <label>Select any image:</label>
        <input type="file" />
      </section> */}
      <input type="submit" value="Submit" class="btn btn-primary" onClick={submitHandler} />
    </form>
    </section>
  );
};

export default Form;
