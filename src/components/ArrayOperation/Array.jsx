import { toBeEmpty } from '@testing-library/jest-dom/dist/matchers';
import { useState } from 'react';

const userData = [
	{
		id: 1,
		name: 'Jaydev',
		age: 27,
	},

	{
		id: 2,
		name: 'Mayur',
		age: 25,
	},

	{
		id: 3,
		name: 'Jagdish',
		age: 24,
	},

	{
		id: 4,
		name: 'Rajesh',
		age: 26,
	},

	{
		id: 5,
		name: 'Hardik',
		age: 25,
	},

	{
		id: 6,
		name: 'Mahesh',
		age: 27,
	},

	{
		id: 7,
		name: 'Shyam',
		age: 28,
	},

	{
		id: 8,
		name: 'Rajendr',
		age: '25',
	},

	{
		id: 9,
		name: 'Manoj',
		age: 26,
	},

	{
		id: 10,
		name: 'Suraj',
		age: '26',
	},

	{
		id: 11,
		name: 'Satish',
		age: 27,
	},

	{
		id: 12,
		name: 'Pankaj',
		age: 24,
	},

	{
		id: 13,
		name: 'Jaydip',
		age: 25,
	},
];

const Array = () => {
	const [list, setList] = useState(userData);
	const [data, setData] = useState({
		id: '',
		name: '',
		age: '',
	});
	const [search, setSearch] = useState('')
	const [searchList, setSearchList] =useState([])

	const searchListData =()=>{
		let newData = [...data]
		const filteredData = newData.filter((ele, i)=>{
			if(search === ''){
				return ele
			} else {
				return ele.text.toLowerCase().includes(search)
			}
		})
	}

	const handleSubmit = e => {
		e.preventDefault();
		console.log(e);
	};

	const handleInputChange = e => {
		const { name, value } = e.target;
		setData({ ...data, [name]: value });
	};

	const AddData = () => {
		let tempArray = [...list];
		tempArray.push(data);
		setList(tempArray);
		setData({id:'', name:'', age:''});
	};

	const Edit =(index)=>{
		let temArray = [...list];
	}

	const Delete = (index)=>{
		let newList = [...list];
		newList.splice(index, 1);
		setList(newList);
	}

	return (
		<div>
			<searchListData />
			<label htmlFor="search">Search bar</label>
			<input 
				type="text"
				id='search'
				name='search'
				value={search || ''}
				onChange={(e)=>{
					let lowercase = e.target.value.toLowerCase();
					setSearch(lowercase);
				}}
			/>
			<table>
				<thead>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>Age</th>
					</tr>
				</thead>
				<tbody>
					{list.map((item, index) => {
								return (
									<>
									<tr key={index}>
										<td>
											{item.id}
										</td>
										<td>
											{item.name}
										</td>
										<td>
											{item.age}
										</td>
									</tr>
									{
										index >=0 ? 
										<>
										<button onClick={()=>Edit(index)}>Edit</button>
										<button onClick={()=>Delete(index)}>delete</button>
										</> : ''
									}
									</>
								);
							})
						}
				</tbody>
			</table>
			<br />
			<br />
			<div>
				<form onSubmit={handleSubmit}>
					<label htmlFor="id">Id : </label>
					<input
						type="number"
						placeholder="Enter your id number"
						name="id"
						id="id"
						value={data.id}
						onChange={handleInputChange}
					/>
					<label htmlFor="name">Name : </label>
					<input
						type="text"
						placeholder="Enter your name"
						name="name"
						id="name"
						value={data.name}
						onChange={handleInputChange}
					/>
					<label htmlFor="age">Age : </label>
					<input
						type="number"
						placeholder="Enter your age"
						name="age"
						id="age"
						value={data.age}
						onChange={handleInputChange}
					/>
					<button type="submit" onClick={AddData}>
						Add Data
					</button>
				</form>
			</div>
		</div>
	);
};

export default Array;
