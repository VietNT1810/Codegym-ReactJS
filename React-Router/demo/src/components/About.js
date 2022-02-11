import React from 'react';
import { useNavigate } from 'react-router-dom'

export default function About() {
    let navigation = useNavigate();
    function handleClick() {
        navigation("/");
    }
    return (
        <div>
            <h1>About</h1>
            <button onClick={handleClick}>go home</button>
            <select onChange={(e) => {navigation(`/${e.target.value}`)}}>
                <option value="Home">Home</option>
                <option value="Contact">Contact</option>
            </select>
        </div>
    )


}
