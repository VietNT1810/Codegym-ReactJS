import React from "react";
import { useState } from "react";

const MyForm = () => {
    const [name, setName] = useState('');

    const handleEvent = (e) => {
        setName(e.target.value);
    }

    //xử lý sự kiện khi submit
    const submitHandler = (e) => {
        //chặn luồng event mặc định
        e.preventDefault();
        //xử lý dữ liệu
        alert('You are submitting ' + name);
    }
    return (
        <form onSubmit={submitHandler}>
            <p>Enter your name: {name}</p>
            <input type="text" placeholder="Enter your name" value={name} onChange={handleEvent} />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default MyForm;