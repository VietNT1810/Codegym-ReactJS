import React from 'react';
import { useState } from "react";

function UseState() {
    let [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(count + 1);
    }

    const handleDecrease = () => {
        setCount(count - 1);
    }

    return (
        <div style={{ padding: 30 }}>
            <button onClick={handleIncrease}>+</button>
            <span>{count}</span>
            <button onClick={handleDecrease}>-</button>
        </div>
    )
}

export default UseState;