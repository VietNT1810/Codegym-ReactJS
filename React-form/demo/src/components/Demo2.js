import React from "react";
import { useState } from "react";

const MyForm = () => {
    const [name, setName] = useState('');

    const handleEvent = (e) => {
        setName(e.target.value);
    }

    let header;
    if (name) {
        header = <h1>Hello {name}</h1>;
    } else {
        header = '';
    }

    return (
        <form>
            {header}
            <p>Enter your name</p>
            <input type="text" placeholder="Enter your name" value={name} onChange={handleEvent} />
        </form>
    )
}

export default MyForm;