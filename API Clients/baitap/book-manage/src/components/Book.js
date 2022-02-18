import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"

function Book() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3004/api')
            .then((res) => {
                setBooks(res.data)
            })
            .catch((err) => { throw err })
    }, [])


    return (
        <div className="container">
            {console.log(books)}
            <div className="d-flex justify-content-around">
                <h1>Library</h1>
                <a href="/books/add"><button className="btn btn-primary">Add</button></a>
            </div>
            <table className="table table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>Title</th>
                        <th>Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="table-primary">
                    {
                        books.map((book) => (
                            <tr key={book.id}>
                                <td>{book.title}</td>
                                <td>{book.number}</td>
                                <td>
                                    <a href={`/books/${book.id}`}><button className="btn btn-secondary">Edit</button></a>
                                    <a><button className="btn btn-danger">Delete</button></a>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Book