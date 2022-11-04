import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		console.log(e);
	};

	return (
		<div className="main">
			<div>
				<h1 className="logo">Login</h1>
				<form onSubmit={handleSubmit}>
					<div className="container">
						<label htmlFor="username" className="label">
							{' '}Username / Email Address
						</label>
						<input
							className="input"
							type="text"
							id="username"
							name="username"
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
					<button type="submit" className="button">
						Login
					</button>
					<p>
						Don't have an account ? <Link to="/">Register</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
