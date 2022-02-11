import React, { useState } from 'react';
import { Formik } from 'formik';
import "../App.css";

export default function Contact() {
    const [form, setForm] = useState({})

    console.log(form)

    const REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    const handleValidate = () => {
        const error = {};
        if (!form.username) {
            error.name = 'Required';
        }

        if (!form.phone) {
            error.phone = 'Required';
        } else if (isNaN(form.phone)) {
            error.phone = 'Invalid phone number';
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
            <h1>Contact form</h1>
            <Formik
                initialValues={form}
                validate={handleValidate}
                onSubmit={handleSubmit}
            >
                {({ values, errors, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div className={`custom-input ${values.username ? 'custom-input-error' : ''}`}>
                            <label htmlFor='username'>Name</label>
                            <input type="text" name="username" id="username" value={values.username} onChange={handleChange} />
                            <p>{errors.name}</p>
                        </div>
                        <div className={`custom-input ${values.email ? 'custom-input-error' : ''}`}>
                            <label htmlFor='email'>Email</label>
                            <input type="mail" name="email" id="email" value={values.email} onChange={handleChange} />
                            <p>{errors.email}</p>
                        </div>
                        <div className={`custom-input ${values.phone ? 'custom-input-error' : ''}`}>
                            <label htmlFor='phone'>Phone</label>
                            <input type="text" name="phone" id="phone" value={values.phone} onChange={handleChange} />
                            <p>{errors.phone}</p>
                        </div>
                        <div>
                            <label htmlFor='message'>Message</label>
                            <textarea id="message" name='message' value={values.message} onChange={handleChange}></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}