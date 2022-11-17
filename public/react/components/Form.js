import React, {useState, useEffect} from 'react'
import {apiurl} from '../api'

export const Form = ({itemsForm, setItemsForm, newForm, setNewForm, items, setItems}) => {

    const handleItemChange = (e) => {
        const value = e.target.value
        setNewTem({
          ...newForm,
          [e.target.value] : value
        })
      }


      async function fetchItems() {
		await fetch(`${apiURL}/items`, {
			"method" : "GET"
        })
        .then((res) => res.json())
        .then((res) => setItems(res))
        .catch(console.error);
	}
	
	useEffect(() => {
		fetchItems()
    }, [])

    //   async function fetchItems(){
	// 	try {
	// 		const response = await fetch(url);
	// 		const itemsData = await response.json();
	// 		setItems(itemsData);
	// 	} catch (err) {
	// 		console.log("Oh no an error! ", err)
	// 	}
	// }

    //   const createnewForm = async (formData) => {
    //     try {
    //       await fetch(`${apiURL}/items`, {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(formData),
    //       });
    //       fetchItems();
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };

    const handleSubmit = (e) => {
        e.preventDefault()
        createnewForm(newForm)
        setNewForm({
          title: "",
          price: "",
          description: "",
          category: "",
          image: ""
        });
        console.log(title);
      }

    // useEffect(() => {
    //     fetchItems();
    // }, [])

return(
    <>
    <form onSubmit={handleSubmit}>
              <h1>New Items</h1>
            <input 
            value={newForm.title}
            onChange={(e) => {setNewForm({...newForm, title: e.target.value})}}
            placeholder="Title"
            type="text"
            name="title"
            required/>
            <br></br>

            <input 
            value={newForm.price}
            onChange={(e) => {setNewForm({...newForm, price: e.target.value})}}
            placeholder="Price"
            type="number"
            name="price"
            required/>
            <br></br>

            <input 
            value={newForm.description}
            onChange={(e) => {setNewForm({...newForm, description: e.target.value})}}
            placeholder="Description"
            type="text"
            name="description"
            required/>
            <br></br>

            <input 
            value={newForm.category}
            onChange={(e) => {setNewForm({...newForm, category: e.target.value})}}
            placeholder="Category"
            type="text"
            name="category"
            required/>
            <br></br>

            <input 
            value={newForm.image}
            onChange={(e) => {setNewForm({...newForm, image: e.target.value})}}
            placeholder="Image"
            type="text"
            name="image"
            required/>    
			<br></br>
      <button> Add Item </button>
            </form>
            </>
)
}