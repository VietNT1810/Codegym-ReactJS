import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';

function Login() {
    const accounts = [
        {
            email: 'admin@gmail.com',
            password: 'letmein'
        },
        {
            email: 'cadangiu@gmail.com',
            password: 'luvit'
        }
    ];

    const regex = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    };

    let navigate = useNavigate();

    const [form, setForm] = useState({})

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleValidate = () => {
        const errors = {};
        if (!form.email) {
            errors.email = 'Required';
        } else if (!regex.email.test(form.email)) {
            errors.email = 'Invalid email';
        }
        if (!form.password) {
            errors.password = 'Required';
        }

        return errors;
    }

    const handleSubmit = () => {
        accounts.map((account) => {
            if (form.email === account.email && form.password === account.password) {
                navigate('/employee', {
                    state: {
                        email: form.email,
                        password: form.password
                    }
                });
            }
        })
    }

    return (
        <>
            <h1>Login</h1>
            <Formik
                initialValues={form}
                onSubmit={handleSubmit}
                validate={handleValidate}
            >
                {({ values, errors, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Username</label>
                            <input type="text" name="email" value={values.email} onChange={handleChange} />
                            <p>{errors.email}</p>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" name="password" value={values.password} onChange={handleChange} />
                            <p>{errors.password}</p>
                        </div>
                        <button type='submit'>Login</button>
                    </form>
                )}
            </Formik>
        </>
    );
}

export default Login;