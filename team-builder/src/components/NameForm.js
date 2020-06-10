import React, { useState } from 'react';

const NameForm = (props) => {
	// console.log("this is our props",props);
	const [name, setName] = useState({ firstname: '', lastname: '' });

	const handleChanges = (event) => {
		console.log('event', event.target.value);
		setName({ ...name, [event.target.name]: event.target.value });
	};

	// will use onSubmit synthetic event
	const submitForm = (event) => {
		event.preventDefault();
		props.addNewName(name);
		setName({ firstname: '', lastname: '' });
	};

	console.log(name);
	return (
		<form onSubmit={submitForm}>
			<label htmlFor="firstname">First Name</label>
			<input
				id="firstname"
				onChange={handleChanges}
				type="text"
				placeholder="First Name"
				value={name.firstname}
				name="firstname"
			/>
			<label htmlFor="lastname">Last Name</label>
			<input
				id="lastname"
				onChange={handleChanges}
				type="text"
				placeholder="Last Name"
				value={name.lastname}
				name="lastname"
			/>
			<button type="submit">Add Name</button>
		</form>
	);
};

export default NameForm;
