import React, { useState } from 'react';

const Form = (props) => {
	const [person, setPerson] = useState({
		firstname: '',
		lastname: '',
		email: '',
	});

	const handleChanges = (e) => {
		setPerson({
			...person,
			[e.target.name]: e.target.value,
		});
		console.log(e.target.value);
	};

	const submitForm = (e) => {
		e.preventDefault();
		props.addNewPerson(person);
		setPerson({ firstname: '', lastname: '', email: '' });
	};

	return (
		<form onSubmit={submitForm}>
			<label htmlFor="firstname">First Name</label>
			<input
				type="text"
				placeholder="First Name"
				onChange={handleChanges}
				name="firstname"
				value={person.firstname}
			/>

			<label htmlFor="lastname">Last Name</label>
			<input
				type="text"
				placeholder="Last Name"
				onChange={handleChanges}
				name="lastname"
				value={person.lastname}
			/>

			<label htmlFor="email">Email</label>
			<input type="email" placeholder="email" onChange={handleChanges} name="email" value={person.email} />

			<button type="submit">Add Member</button>
		</form>
	);
};

export default Form;
