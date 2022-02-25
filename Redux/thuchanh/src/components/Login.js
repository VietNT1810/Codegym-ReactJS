import React, { useState, useEffect } from 'react'

export default function Login() {
    const [user, setUser] = useState({ username: '', password: '' })

    const setValueForUser = (key, value) => {
        const newVal = { ...user, [key]: value };
        setUser(newVal);
    }

    return (
        <form>
            <label>User name</label>
            <input id="username" onChange={(e) => setValueForUser('username', e.target.value)} type="text" />
            <label>Password</label>
            <input id="password" onChange={(e) => setValueForUser('password', e.target.value)} type="password" />
            <button type="button" onClick={() => { }}>Login</button>
        </form>
    )
}
