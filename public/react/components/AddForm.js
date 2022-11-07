import React, { useState } from 'react';
import apiURL from '../api';

export const AddForm = (props) => {
	const [title, setTitle] = useState('');
	const [price, setPrice] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');
	const [image, setImage] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		const payload = {
			title,
			price,
			description,
			category,
			image,
		};

		const response = await fetch(`${apiURL}/items`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		});

		if (response.ok) {
			setTitle('');
			setPrice('');
			setDescription('');
			setCategory('');
			setImage('');
            props.fetchItems();
            props.setIsAddingItem(false);
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h2>Add Orange</h2>
				<br></br>
				<div>
					<input
						type="text"
						placeholder="Title"
						aria-label="title"
						onChange={(e) => setTitle(e.target.value)}
						value={title}
					/>
				</div>
				<br></br>
				<div>
					<input
						type="integer"
						placeholder="Price"
						aria-label="price"
						onChange={(e) => setPrice(e.target.value)}
						value={price}
					/>
				</div>
				<br></br>
				<div>
					<input
						type="text"
						placeholder="Description"
						aria-label="description"
						onChange={(e) => setDescription(e.target.value)}
						value={description}
					/>
				</div>
				<br></br>
				<div>
					<input
						type="text"
						placeholder="Category"
						aria-label="category"
						onChange={(e) => setCategory(e.target.value)}
						value={category}
					/>
				</div>
				<br></br>
				<div>
					<input
						type="text"
						placeholder="Image"
						aria-label="image"
						onChange={(e) => setImage(e.target.value)}
						value={image}
					/>
				</div>
				<br></br>
				<br></br>
				<button type="submit"><h2>Submit Item</h2></button>
			</form>
		</div>
	);
};
