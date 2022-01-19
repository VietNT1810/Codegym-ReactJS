import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function EffectDemo() {
    const [selected, setSelected] = useState('0')
    const [valueSelected, setValueSelected] = useState('')

    const choice = (e) => {
        console.log(e.target.value);
        setSelected(e.target.value);
    }

    useEffect(() => {
        switch (selected) {
            case '0': setValueSelected('Java'); break;
            case '1': setValueSelected('Angular'); break;
            case '2': setValueSelected('Javascript'); break;
            case '3': setValueSelected('Python'); break;
            default:
        }
    }, [selected])

    return (
        <div>
            <select onChange={(e) => choice(e)}>
                <option value='0'>Java</option>
                <option value='1'>Angular</option>
                <option value='2'>Javascript</option>
                <option value='3'>Python</option>
            </select>
            <h1>Your choice: {valueSelected}</h1>
        </div>
    )
}

export default EffectDemo;