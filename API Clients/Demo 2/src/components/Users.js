import React, { Component } from 'react';
import axios from 'axios';

export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [] }
    }
    componentDidMount() {
        axios.get('http://localhost:3001/api/user/list')
            .then((res) => {
                this.setState({ users: res.data })
            })
    }

    render() {
        const { users } = this.state
        return (
            <>
                <h2>Users list</h2>
                <ul>
                    {users.map((user) => (
                        <li key={user.id} > {user.name} </li>
                    ))}
                </ul>
            </>
        )
    }
}
