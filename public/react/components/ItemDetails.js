import React from 'react';
import { Item } from './Item';
import apiURL from '../api';

export const PageComp = ({items,setItem}) => {

//delete handler
    const handleDelete= async ()=>{
        const response = await fetch(`${apiURL}/items`, {
      method: "DELETE"
    });
    const data = await response.json();
     setItem({});
    }
;

	
	(items ? console.log(items) : null);


	return <>
		{
		Object.entries(items).length > 0 ? 	
    <Card style={{ width: '18rem' }}>
		<Card.Img variant="top" src="holder.js/100px180" />
		<Card.Body>
		  <Card.Title>Card Title</Card.Title>
		  <Card.Text>
			Some quick example text to build on the card title and make up the
			bulk of the card's content.
		  </Card.Text>
		  <Button variant="primary">Go somewhere</Button>
		</Card.Body>
	  </Card>
			// <div>
			// 	<h2>{items.title}</h2>
      //           <p>{items.description}</p>
      //           <p>{items.category}</p>
      //           <p>{items.price}</p>
      //           <p>{items.category}</p>
				
      //           <button onClick={()=>setItem({})}>Back To Inventory List</button>
      //           <button onClick={handleDelete}>Delete Item </button>
			// </div>
		: null
		}


	</>
} 