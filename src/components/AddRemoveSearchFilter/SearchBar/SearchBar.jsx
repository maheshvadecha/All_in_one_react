import React, { useState } from 'react';
import Table from './Table';
import {Users} from './Users'

const SearchBar = () => {
	const [query, setQuery] = useState('');
	const keys =['first_name', 'last_name', 'email'];

	// console.log(Users[0]['email'])
	const search =(data)=>{
		return data.filter((item)=>keys.some((key)=>item[key].toLowerCase().includes(query)))
	}

 	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}>

			<input
				type={'text'}
				placeholder="Search...."
				id="search"
				name="search"
				onChange={e => {
					let lowercase = e.target.value.toLowerCase();
					setQuery(lowercase);
				}}
			/>
			<Table data={search(Users)}/>
		</div>
	);
};
export default SearchBar;
