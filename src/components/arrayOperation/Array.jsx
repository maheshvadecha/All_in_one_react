import React, { useState } from 'react';

const Array = () => {
	const [data, setData] = useState([]);
	const [temp, setTemp] = useState([]);
	const [search, setSearch] = useState('');
	const [name, setName] = useState('');
	const [editId, setEditId] = useState('');
	const [cloneData, setCloneData] = useState([]);

	const deleteValue = id => {
		console.log(id);
		const index = data.findIndex(i => i.id == id);
		console.log(index, data);
		if (index > -1) {
			const temp = [...data];
			temp.splice(index, 1);
			setData(temp);
			setCloneData(temp);
		}
	};

	const editValue = id => {
		console.log(id);
		const index = data.findIndex(i => i.id == id);
		console.log(index, data);
		if (index > -1) {
			const temp = [...data];
			temp[index].name = name;
			setData(temp);
		}
	};

	return (
		<div style={{ margin: '10px' }}>
			<div>
                <label htmlFor="name"> Name</label>
				<input
					type="text"
					id="name"
					value={name}
					onChange={event => {
						setName(event.target.value);
					}}
				/>
				{editId
					? <button
							onClick={() => {
								editValue(editId);
								setName('');
								setEditId('');
							}}>
							Update name
						</button>
					: <button
							onClick={() => {
								setData([...data, { id: Date.now(), name: name }]);
								setCloneData([...data, { id: Date.now(), name: name }]);
								setName('');
							}}>
							Enter name
						</button>}

				<input
					type="text"
					id="testest"
					name="test"
					placeholder="search..."
					value={search}
					onChange={event => {
						setSearch(event.target.value);
						const temp = data.filter(i => i.name === event.target.value);
						setData(temp);
					}}
				/>
				<button
					onClick={() => {
						setData(cloneData);
						setSearch('');
					}}>
					search clear
				</button>
			</div>
			{data.map(i => {
				return (
					<div key={i.id} style={{ display: 'flex' }}>
						<p>
							id: {i.id} name: {i.name}
						</p>
						<button
							onClick={() => {
								setEditId(i.id);
								setName(i.name);
							}}>
							Edit
						</button>
						<button
							onClick={() => {
								deleteValue(i.id);
							}}>
							delete
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default Array;
