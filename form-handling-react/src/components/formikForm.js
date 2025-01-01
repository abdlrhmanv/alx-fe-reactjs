// src/components/formikForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegistrationForm = () => {
    // Validation schema using Yup
    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    });

    // Initial form values
    const initialValues = {
        username: '',
        email: '',
        password: '',
    };

    // Handle form submission
    const onSubmit = (values, { resetForm }) => {
        console.log('Form submitted:', values);
        alert('Registration successful!');
        resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ isSubmitting }) => (
                <Form style={{ maxWidth: '400px', margin: 'auto' }}>
                    <h2>Register</h2>

                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="username">Username:</label>
                        <Field
                            type="text"
                            id="username"
                            name="username"
                            style={{ display: 'block', width: '100%' }}
                        />
                        <ErrorMessage name="username" component="small" style={{ color: 'red' }} />
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="email">Email:</label>
                        <Field
                            type="email"
                            id="email"
                            name="email"
                            style={{ display: 'block', width: '100%' }}
                        />
                        <ErrorMessage name="email" component="small" style={{ color: 'red' }} />
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="password">Password:</label>
                        <Field
                            type="password"
                            id="password"
                            name="password"
                            style={{ display: 'block', width: '100%' }}
                        />
                        <ErrorMessage name="password" component="small" style={{ color: 'red' }} />
                    </div>

                    <button type="submit" disabled={isSubmitting} style={{ padding: '0.5rem 1rem' }}>
                        {isSubmitting ? 'Submitting...' : 'Register'}
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default RegistrationForm;
