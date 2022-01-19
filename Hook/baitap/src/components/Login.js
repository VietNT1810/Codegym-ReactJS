import React from 'react';
import { useState } from 'react';

function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        document.getElementById('UserName').innerText = `Username: ${name}`
        document.getElementById('UserPassword').innerText = `Password: ${password}`
    }

    return (
        <>
            <label htmlFor='name'>Username: </label>
            <input id='name' type='text' placeholder='Enter your username' onChange={(e) => { setName(e.target.value) }} />
            <br></br>
            <label htmlFor='password'>Password: </label>
            <input id='password' type='password' placeholder='Enter your password' onChange={(e) => { setPassword(e.target.value); }} />
            <br></br>
            <button onClick={handleSubmit}>Login</button>
            <h1 id="UserName"></h1>
            <h1 id="UserPassword"></h1>
        </>
    )
}

export default Login;