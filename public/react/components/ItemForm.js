import React, {useState} from "react";
import apiURL from "../api";


export const ItemForm = ({cancelFunction, item, handleSubmit, setItem, method}) => {
    const {
        name,
        price,
        category,
        description,
        image
  } = item;
  
    const formAddItem = method === 'add' ? 'Add Item' : 'Edit Item';
  
  
    return <div className="item-container" id="item-add">
      <h3>{formAddItem}</h3>
      <form className='form-input-list' onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="title" value={name} onChange={(ev) => setItem({...item,name: ev.target.value})}/>
        <label>Price:</label>
        <input type="number" name="price" value={price} onChange={(ev) => setItem({...item, price: ev.target.value})}/>
        <label>Category:</label>
        <input type="text" name="category" value={category} onChange={(ev) => setItem({...item, category: ev.target.value})}/>
        <label>Description:</label>
        <textarea name="description" value={description} onChange={(ev) => setItem({...item, description: ev.target.value})}/>
        <label>Image URL:</label>
        <input type="text" name="image" value={image} onChange={(ev) => setItem({...item, image: ev.target.value})}/>
        <span className='options-container'>
          <button type="submit">Submit</button>
          <button className='btn-danger' onClick={() => cancelFunction(false)}>Cancel</button>
        </span>
      </form>
    </div>
  }