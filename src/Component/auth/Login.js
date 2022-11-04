import React, { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')

  return (
    <div className='main'>
      <div className='box'>
        <label
          htmlFor='username'
          className='label'>Username</label>
        <input className='input'
          placeholder='username'
          type='text'
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label
          htmlFor='password'
          className='label'>Password</label>
        <input className='input'
          placeholder='password'
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Login