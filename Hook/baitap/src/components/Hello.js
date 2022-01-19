import React from 'react';
import { useState, useEffect } from 'react';

function Hello() {
    let [result, setResult] = useState();
    let [value, setValue] = useState('')

    useEffect(() => {
        setResult(value);
    }, [value])

    return (
        <div>
            <input type="text" onChange={(e) => { setValue(e.target.value) }} />
            <h2>Hello:{result}</h2>
            <h2>Hello:{value}</h2>
        </div>
    )
}

export default Hello;