import React, { useState } from 'react';

function SignIn() {
    const [state, setState] = useState({})

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        console.log(e);
        e.preventDefault();

        let isValid = state.username && state.password && state.email && state.confirmPassword;
        if (isValid) {
            if (state.password === state.confirmPassword) {
                alert('Sign up successful!')
            } else {
                alert('Please confirm your password!')
            }
        } else {
            alert('Please fill in!')
        }
    }

    console.log(state);

    return (
        <form style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
            <h1>Sign up</h1>
            <label htmlFor='username'>Username</label>
            <br></br>
            <input type="text" id="username" name="username" onChange={handleChange} />
            <br></br>
            <label htmlFor='email'>Email</label>
            <br></br>
            <input type="email" id="email" name="email" onChange={handleChange} />
            <br></br>
            <label htmlFor='password'>Password</label>
            <br></br>
            <input type="password" id="password" name="password" onChange={handleChange} />
            <br></br>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <br></br>
            <input type="password" id="confirmPassword" name="confirmPassword" onChange={handleChange} />
            <br></br>
            <input type="submit" />
        </form>
    )
}

export default SignIn;