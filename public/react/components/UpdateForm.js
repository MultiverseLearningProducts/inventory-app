import React, { useState } from 'react';
import apiURL from '../api';


export const UpdateForm = (props) => {
	const [title, setTitle] = useState(props.title);
	const [price, setPrice] = useState(props.price);
	const [description, setDescription] = useState(props.description);
	const [category, setCategory] = useState(props.category);
	const [image, setImage] = useState(props.image);

    console.log(props, '??')

	const handleUpdate = async (e) => {
        e.preventDefault();

		const payload = {
			title,
			price,
			description,
			category,
			image,
		};

		const response = await fetch(`${apiURL}/items/${props.id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		});

		if (response.ok) {
			setTitle('');
			setPrice('');
			setDescription('');
			setCategory('');
			setImage('');
            await props.fetchItems();
            props.setIsEditing(false);
            props.setIsClicked(false);
		}
	};

	return (
		<div>
			<form onSubmit={handleUpdate}>
				<h3>Update Item</h3>
				<div>
					<input
						type="text"
						placeholder={props.title}
						aria-label="title"
						onChange={(e) => setTitle(e.target.value)}
						value={title}
					/>
				</div>
				<div>
					<input
						type="integer"
						placeholder={props.price}
						aria-label="price"
						onChange={(e) => setPrice(e.target.value)}
						value={price}
					/>
				</div>
				<div>
					<input
						type="text"
						placeholder={props.description}
						aria-label="description"
						onChange={(e) => setDescription(e.target.value)}
						value={description}
					/>
				</div>
				<div>
					<input
						type="text"
						placeholder={props.category}
						aria-label="category"
						onChange={(e) => setCategory(e.target.value)}
						value={category}
					/>
				</div>
				<div>
					<input
						type="text"
						placeholder={props.image}
						aria-label="image"
						onChange={(e) => setImage(e.target.value)}
						value={image}
					/>
				</div>
				<button type="submit">Update Item</button>
			</form>
		</div>
	);
};
