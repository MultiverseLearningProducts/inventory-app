import React, {useState} from 'react';
import { Item } from './Item';
import apiURL from '../api';

export const ItemsList = ({items, fetchItems, setSingleItemId, setSingleView, singleItemId, singleView, setItems, title, description, price, category, image, setTitle, setDescription, setPrice, setCategory, setImage}) => {
	const[editItem, setEditItem] = useState(false)
	const [details, setDetails] = useState(false)
	const updateItem = async(ev) =>{
		ev.preventDefault()
		console.log(ev)
		const res = await fetch(`${apiURL}/items/${singleItemId}`, {
		  method: 'PUT',
		  headers: {
			'Content-Type': 'application/json'
		  },
		  body: JSON.stringify({
			title: title,
			price: price,
			description: description,
			category: category,
			image: image
		  
		  })
		})
		
		setTitle('')
		setDescription('')
		setPrice('')
		setCategory('')
		setImage('')
		const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
      setItems(itemsData)
	  }
	return <>
		{
		
			(items.map((item, idx) => {
				return (singleView ? (
					(singleItemId === item.id) ?
					(
						<div>
								<Item item={item} key={idx} fetchItems ={fetchItems} singleItemId={singleItemId} singleView={singleView} 
								setSingleItemId={setSingleItemId} setSingleView={setSingleView}  setItems={setItems} setTitle={setTitle} setDescription= {setDescription} setPrice={setPrice} setCategory={setCategory} setImage={setImage} title={title} description={description} price={price} category={category} image={image} editItem={editItem} setEditItem={setEditItem} details ={details} setDetails={setDetails} />
							
								{(editItem) ? (<form onSubmit={updateItem}>
									<input onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Title' value={item.title}/>
									<input onChange={(e) => setPrice(e.target.value)} type="number" placeholder='Price' value={item.price}/>
									<input onChange={(e) => setDescription(e.target.value)} type="text" placeholder='Description' value={item.description}/>
									<input onChange={(e) => setCategory(e.target.value)} type="text" placeholder='Category' value={item.category}/>
									<input onChange={(e) => setImage(e.target.value)} type="text" placeholder='Image LInk' value={item.image}/>
									<button type="submit">Update your new Item</button>
								</form>
								):(
									null
							)}
						</div>
					):( 
						null
					)
				):(
					<Item item={item} key={idx} fetchItems ={fetchItems} singleItemId={singleItemId} singleView={singleView} 
				setSingleItemId={setSingleItemId} setSingleView={setSingleView}  setItems={setItems} setTitle={setTitle} setDescription= {setDescription} setPrice={setPrice} setCategory={setCategory} setImage={setImage} title={title} description={description} price={price} category={category} image={image} editItem={editItem} setEditItem={setEditItem}  details ={details} setDetails={setDetails}/>
				)
			)}
			))}
		
				
	</>
} 
