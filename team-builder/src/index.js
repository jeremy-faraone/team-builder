import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Names from './components/Names';
import NameForm from './components/NameForm';
//mimic fetching data from an API
// import data from './data';

function App() {
	const [names, setNames] = useState([
		// {
		// 	firstname: 'First Name',
		// 	lastname: 'Last Name',
		// },
	]);

	const addNewName = (name) => {
		const newName = {
			firstname: name.firstName,
			lastname: name.lastName,
		};

		// why spread?
		// we do not want to directly mutate state variable.
		// use our full state array, add new Note with a spread
		// set state to new array.
		setNames([...names, newName]);
		console.log(name);
	};

	return (
		<div className="App">
			<h1>Team Members</h1>
			{/* We are going to pass a function down as a prop */}
			<NameForm addNewName={addNewName} />
			<Names names={names} />
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
