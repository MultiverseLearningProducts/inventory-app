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

		const response = await fetch(`${apiUrl}/items`, {
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
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h3>Add Item</h3>
				<div>
					<input
						type="text"
						placeholder="Title"
						aria-label="title"
						onChange={(e) => setTitle(e.target.value)}
						value={title}
					/>
				</div>
				<div>
					<input
						type="integer"
						placeholder="Price"
						aria-label="price"
						onChange={(e) => setPrice(e.target.value)}
						value={price}
					/>
				</div>
				<div>
					<input
						type="text"
						placeholder="Description"
						aria-label="description"
						onChange={(e) => setDescription(e.target.value)}
						value={description}
					/>
				</div>
				<div>
					<input
						type="text"
						placeholder="Category"
						aria-label="category"
						onChange={(e) => setCategory(e.target.value)}
						value={category}
					/>
				</div>
				<div>
					<input
						type="text"
						placeholder="Image"
						aria-label="image"
						onChange={(e) => setImage(e.target.value)}
						value={image}
					/>
				</div>
				<button type="submit">Submit Item</button>
			</form>
		</div>
	);
};
