import React, { useState } from 'react';

const AddRemove = () => {
	const [data, setData] = useState([{ name: '', age: '', post: '' }]);

	const handleInputChange = (index, e) => {
		let newData = [...data];
		newData[index][e.target.name] = e.target.value;
		setData(newData);
	};

	const handleSubmit = e => {
		e.preventDefault();
	};

	const AddData = () => {
		setData([...data, { name: '', age: '', post: '' }]);
	};

	const Edit = index => {
		let newData = [...data];
		
	};
	const Delete = index => {
		let newData = [...data];
		newData.splice(index, 1);
		setData(newData);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				{data && data.length > 0
					? data.map((item, index) => {
							console.log(index);
							return (
								<div key={index}>
									<label htmlFor="name">Name : </label>
									<input
										type="text"
										name="name"
										id="name"
										placeholder="Please enter name"
										value={item.name || ''}
										onChange={e => {
											handleInputChange(index, e);
										}}
									/>
									<label htmlFor="age">Age : </label>
									<input
										type="number"
										name="age"
										id="age"
										placeholder="Please enter age"
										value={item.age || ''}
										onChange={e => {
											handleInputChange(index, e);
										}}
									/>
									<label htmlFor="post">Post</label>
									<input
										type="text"
										name="post"
										id="post"
										placeholder="Please enter your post"
										value={item.post || ''}
										onChange={e => {
											handleInputChange(index, e);
										}}
									/>
									{index
										?
										 <>
											<button onClick={() => Edit(index)}>Edit</button>
											<button onClick={() => Delete(index)}>Delete</button>
										</>
										: <button onClick={() => AddData()}>AddData</button>}
								</div>
							);
						})
					: ''}
			</form>
		</div>
	);
};

export default AddRemove;
