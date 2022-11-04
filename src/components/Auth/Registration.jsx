import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Registration.css';

const Registration = () => {
	const [first_name, setFirst_name] = useState('');
	const [last_name, setLast_name] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		console.log(e);
	};

	return (
		<div className="main">
			<div>
				<h1>Registration</h1>
				<form onSubmit={handleSubmit}>
					<div className="container">
						<label htmlFor="first_name" className="label">
							{' '}Firstname
						</label>
						<input
							className="input"
							type="text"
							id="first_name"
							name="first_name"
							value={first_name || ''}
							onChange={e => setFirst_name(e.target.value)}
							required
						/>
					</div>

					<div className="container">
						<label htmlFor="last_name" className="label">
							{' '}Lastname
						</label>
						<input
							className="input"
							type="text"
							id="last_name"
							name="last_name"
							value={last_name || ''}
							onChange={e => setLast_name(e.target.value)}
							required
						/>
					</div>

					<div className="container">
						<label htmlFor="email" className="label">
							{' '}Email Address
						</label>
						<input
							className="input"
							type="text"
							id="email"
							name="email"
							value={email || ''}
							onChange={e => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="container">
						<label htmlFor="password" className="label">
							{' '}Password
						</label>
						<input
							className="input"
							type="password"
							id="password"
							name="password"
							value={password || ''}
							onChange={e => setPassword(e.target.value)}
							required
						/>
					</div>
					<button type="submit">
						<Link
							to='/login' 
							style={{textDecoration:'none'}}>
								Register
						</Link>
					</button>
				</form>
			</div>
		</div>
	);
};

export default Registration;
