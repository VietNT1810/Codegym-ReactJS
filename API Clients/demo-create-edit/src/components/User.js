import axios from 'axios';
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3001/api/user/list")
            .then((res) => {
                this.setState({ users: res.data })
            })
            .catch((err) => { throw err })
    }

    render() {
        const { users } = this.state;
        return (
            <div className="user-list container">
                <table className="table table-success table-striped table-hover">
                    <thead>
                        <th>STT</th>
                        <th>Họ và tên</th>
                        <th>Hành động</th>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td><a href={`/api/user/${user.id}`}>Edit</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <a href="/user/add"><button>Create</button></a>
            </div>
        )
    }
}
