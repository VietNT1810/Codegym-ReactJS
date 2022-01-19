import React from "react";
import { useState } from "react";

const MyForm = () => {
    const [state, setState] = useState({
        username: '',
        age: null
    });

    //xử lý sự kiện khi submit
    const submitHandler = (e) => {
        //chặn luồng event mặc định
        e.preventDefault();
        //xử lý dữ liệu
        alert('You are submitting ');
    }

    const handleChange = (e) => {
        console.log(e)
        setState({ [e.target.name]: e.target.value });
    }

    return (
        <form onSubmit={submitHandler}>
            <h1>Hello {state.username}, age: {state.age}</h1>
            <p>Enter your name: </p>
            <input type="text" name="username" onChange={handleChange} />
            <p>Enter your age: </p>
            <input type="text" name="age" onChange={handleChange} />
            <input type='submit'/>
        </form>
    )
}

export default MyForm;