import { useState, useEffect } from "react";
import axios from "axios";

import React from 'react'

export default function UserList() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/user/list')
            .then((res) => {
                setUser(res.data);
            })
    }, [user])

    return (
        <>
            <h2>Users list</h2>
            <ul>
                {user.map((user) => (
                    <li key={user.id} > {user.name} </li>
                ))}
            </ul>
        </>
    )
}
