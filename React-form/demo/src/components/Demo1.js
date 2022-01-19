import React from "react";
import { useState } from "react";

const MyForm = () => {
    const [name, setName] = useState('');

    const handleEvent = (e) => {
        setName(e.target.value);
    }

    return (
        <form>
            <h1>Hello {name}</h1>
            <input type="text" placeholder="Enter your name" value={name} onChange={handleEvent} />
        </form>
    )
}

export default MyForm;