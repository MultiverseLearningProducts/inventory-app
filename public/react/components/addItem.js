import React, { useState, useEffect } from 'react';
import { Input, Page, setOptions } from '@mobiscroll/react';

setOptions({
    theme: 'ios',
    themeVariant: 'light'
  });

const [formInput, setFormInput] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    imageUrl: '',
});

function handleChange(e) {
    const {name, value} = e.target;
    setFormInput({
        ...formInput,
        [name]: value,
    });
};

 async function handleSubmit(e) {
    try {
        const response = await fetch(`${apiURL}/sauces`, {
            method: 'POST',
            body: JSON.stringify(formInput)
        });

        if (!response.ok) {
            throw new Error('Item has not been added')
        }
        const data = await response.json();
        console.log("Item has been added successfully", data);
        setFormInput({
            name: '',
            description: '',
            price: '',
            category: '',
            imageUrl: '',
        });

    } catch (error) {
        console.log("error adding item", error)
    }
}


  return (
    <Page>
      <form onSubmit={handleSubmit} className="mbsc-form-group">
        <div className="mbsc-form-group-title">Add Your Item!</div>
        <Input label="name" type="text" value={formInput.name} onChange={handleChange} placeholder="Item Name" />
        <Input label="description" type="text" value={formInput.description} onChange={handleChange} placeholder="Description" />
        <Input label="price" type="text" value={formInput.price} onChange={handleChange} placeholder="Price" />
        <Input label="category" type="text" value={formInput.category} onChange={handleChange} placeholder="Category" />
        <Input label="imgUrl" type="url" value={formInput.imageUrl} onChange={handleChange} placeholder="Image URL" />
        <button type="submit"> Submit Your Item!</button>
      </form>
    </Page>
  );

export default addItem;
