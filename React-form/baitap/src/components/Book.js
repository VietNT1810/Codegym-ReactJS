import React, { useState } from 'react';
import { Formik } from 'formik';

export default function Book() {
    const [form, setForm] = useState({})
    const [books, setBooks] = useState([])

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleValidate = () => {
        const error = {};
        if (!form.title) {
            error.title = 'Required';
        }
        if (!form.number) {
            error.number = 'Required';
        } else if (isNaN(form.number)) {
            error.number = 'Invalid number';
        }

        return error;
    }


    const handleDelete = (index) => {
        const newBook = JSON.parse(JSON.stringify(books));
        newBook.splice(index, 1);
        setBooks(newBook);
    }

    const handleSubmit = () => {
        const newBook = JSON.parse(JSON.stringify(books));
        newBook.push(form);
        setForm({});
        setBooks(newBook);
    }

    return (
        <div className="container">
            <h1>Library</h1>
            <Formik
                initialValues={form}
                validate={handleValidate}
                onSubmit={handleSubmit}
            >
                {({ values, errors, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Tiêu đề</label>
                            <input type="text" name="title" value={form.title || ''} onChange={handleChange} />
                            <p>{errors.title}</p>
                        </div>
                        <div>
                            <label>Số lượng</label>
                            <input type="text" name="number" value={form.number || ''} onChange={handleChange} />
                            <p>{errors.number}</p>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
            <table border='1'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{book.title}</td>
                                <td>{book.number}</td>
                                <td>
                                    <button>Edit</button>
                                    <button onClick={handleDelete.bind(this, index)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}