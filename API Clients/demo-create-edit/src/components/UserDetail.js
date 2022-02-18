import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom"
import axios from 'axios';

export default function UserDetail() {
    const { userId } = useParams();
    const [user, setUser] = useState();

    useEffect(() => {
        axios.get('http://localhost:3001/api/user/list')
            .then((res) => {
                setUser(res.data[userId - 1]);
            })
            .catch((err) => { })
    }, [])
    return (
        <div>
            <label>a</label>
        </div>
    )
}
