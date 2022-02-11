import React, { useState } from 'react';
import { Formik } from 'formik';
import "../App.css";

export default function Email() {
    const [form, setForm] = useState({})

    console.log(form)

    const REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    const handleValidate = () => {
        const error = {};

        if (!form.title) {
            error.title = 'Required';
        }

        if (!form.email) {
            error.email = 'Required';
        } else if (!REGEX.test(form.email)) {
            error.email = 'Invalid email address';
        }
        return error;
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = () => {
        alert('Add contact success!')
    }

    return (
        <div className="container">
            <h1>Mail form</h1>
            <Formik
                initialValues={form}
                validate={handleValidate}
                onSubmit={handleSubmit}
            >
                {({ values, errors, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div className={`custom-input ${values.email ? 'custom-input-error' : ''}`}>
                            <label htmlFor='email'>To</label>
                            <input type="mail" name="email" id="email" value={values.email || ''} onChange={handleChange} />
                            <p>{errors.email}</p>
                        </div>
                        <div className={`custom-input ${values.title ? 'custom-input-error' : ''}`}>
                            <label htmlFor='title'>Title</label>
                            <input type="text" name="title" id="title" value={values.title || ''} onChange={handleChange} />
                            <p>{errors.title}</p>
                        </div>
                        <div>
                            <label htmlFor='message'>Message</label>
                            <textarea id="message" name='message' value={values.message || ''} onChange={handleChange}></textarea>
                        </div>
                        <div>
                            <input type="file" name="fileUpload" onChange={handleChange} />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}