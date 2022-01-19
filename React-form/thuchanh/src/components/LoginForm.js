import React from 'react'
import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';

function LoginForm() {
    return (
        <div>
            <h1>Login</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
            >
                <Form>
                    <label htmlFor="email">Email</label>
                    <Field type='email' name='email' />
                    <br></br>
                    <label htmlFor="password">Password</label>
                    <Field type='password' name='password' />
                </Form>
            </Formik>
        </div>
    )
}

export default LoginForm;
