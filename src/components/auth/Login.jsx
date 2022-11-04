import React, { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(e)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    type='text'
                    placeholder="username"
                    id="username"
                    name="username"
                    value={username}
                    autoComplete="off"
                    required
                    onChange={(e) => { setUsername(e.target.value) }}
                />

                <label htmlFor="password">Password</label>
                <input
                    type='password'
                    placeholder="password"
                    id="password"
                    name="password"
                    value={password}
                    autoComplete='off'
                    required
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}   

export default Login;