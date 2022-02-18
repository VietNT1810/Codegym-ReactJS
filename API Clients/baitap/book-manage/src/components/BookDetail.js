import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function BookDetail() {
    const [book, setBook] = useState([]);
    const { bookId } = useParams();
    const [create, setCreate] = useState(!bookId);

    useEffect(() => {
        if (bookId) {
            axios.get(`http://localhost:3004/api/${bookId}`)
                .then((res) => {
                    console.log(res.data);
                    setBook(res.data)
                })
                .catch((err) => {
                    throw err;
                })
        }
    }, [bookId])

    const handleChange = (e) => {
        console.log(e);
        setBook({ ...book, [e.target.name]: e.target.value });
    }

    const handleSubmit = () => {
        if (create) {
            axios.post("http://localhost:3004/api", book)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error.response.data);
                });
        } else {
            if (bookId) {
                axios.put(`http://localhost:3004/api/${bookId}`, book)
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error.response.data);
                    });
            }
        }

        console.log(book);
    }

    return (
        <div className="container">
            <a href="/">Back to home</a>
            <div>
                <label>ID</label>
                <input type="number" name="id" value={book.id || ''} onChange={handleChange} required />
            </div>
            <div>
                <label>Title</label>
                <input type="text" name="title" value={book.title || ''} onChange={handleChange} required />
            </div>
            <div>
                <label>Number</label>
                <input type="number" name="number" value={book.number || ''} onChange={handleChange} required />
            </div>
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default BookDetail