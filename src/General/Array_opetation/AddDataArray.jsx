import React, { useState } from 'react';

const AddDataArray = () => {
	const [data, setData] = useState({
		first_name: '',
		last_name: '',
		gender: '',
		email: '',
	});

	const handleSubmit = e => {
		e.preventDefault();
	};

	const handleInputChange = e => {

	};
    
	return (
		<div>
			<form action="" onSubmit={handleSubmit}>
				<label htmlFor="first_name">First name</label>
				<input
					type="text"
					placeholder="Please enter firstname"
					id="first_name"
					name="first_name"
					required
					value={data.first_name || ''}
					onChange={e => handleInputChange(e)}
				/>
				<label htmlFor="last_name">Last name</label>
				<input
					type="text"
					placeholder="Please enter lastname"
					id="last_name"
					name="last_name"
					required
					value={data.last_name || ''}
					onChange={e => handleInputChange(e)}
				/>
				<label htmlFor="gender">Gender</label>
				<input
					type="text"
					placeholder="Please enter gender"
					id="gender"
					name="gender"
					required
					value={data.gender || ''}
					onChange={e => handleInputChange(e)}
				/>
				<label htmlFor="email">Email</label>
				<input
					type="text"
					placeholder="Please enter email address"
					id="email"
					name="email"
					required
					value={data.email || ''}
					onChange={e => handleInputChange(e)}
				/>
				<button type="button">Add Data</button>
			</form>
		</div>
	);
};

export default AddDataArray;
