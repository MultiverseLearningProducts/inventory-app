import React,{useState} from 'react';
import apiURL from '../api';
//BOOTSTRAP
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Form1 = () => {
	const [title, setTitle] = useState('');
    const [description , setDescription] = useState('');
    const [price, setPrice] = useState(''); //do i make this a number?
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');

    const itemsData = {
        title,
        description,
        price,
        category,
        image 
      };

      const handleSubmit= async () =>{
      const response = await fetch(`${apiURL}/items`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                itemsData // our data TO CREATE here
            )
        });
        const data = await response.json();
    }

	return (<>

<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="email" placeholder="Item Title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Description" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Price" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="Category" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Image" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit New Item
      </Button>
    </Form>
		
       
		
	</>)
} 