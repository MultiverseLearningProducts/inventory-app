import React from 'react'
import apiURL from '../api'

export const UpdateForm = ({setitem, item, setUpdatedItem}) => {

    async function updateItem(event, item){
        event.preventDefault()
		try {
            console.log('THIS IS THE Item ==', setUpdatedItem, item)
			await fetch(`${apiURL}/items/${item.id}`,  {
			  	method: 'PUT',
			 	headers: {
			   'Content-Type': 'application/json',
			   },
				body: JSON.stringify(setUpdatedItem),
		   	});
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}         

    return <div className="item-container" id="update-form">
    <h3>Update Item </h3>
    <form onSubmit={(e) => updateItem(e, item)}>
    <input type="submit" value="submit" />
        <label>title</label>
        <input onChange={(event) => {
            setitem({...item, title: event.target.value})
        }} type="text"/>
        <label>description</label>
        <input onChange={(event) => {
           setitem({...item, description: event.target.value})
            
         }} type="text"/>
        <label>price</label>
        <input onChange={(event) => {
           setitem({...item, price: event.target.value})
        }}type="text"/>
        <label>category</label>
        <input onChange={(event) => {
            setitem({...item, category: event.target.value})
        } }type="text"/>
        <label>image</label>
        <input onChange={(event) => {
            setitem({...item, image: event.target.value})
        }}type="text"/>
        
    </form>
    </div>
    }

