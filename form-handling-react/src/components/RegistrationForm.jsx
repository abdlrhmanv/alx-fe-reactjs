import React, {useState } from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    comst [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        const newErrors = {};
        if (! formData.username.trim()) newErrors.username = 'Username is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.password.trim()) newErrors.password = 'Password is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            console.log('Form submitted:', formData);
            alert('Registration successful!');
            setFormData({ username: '', email: '', password: ''});
        }
    };
    
    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
            <h2>Register</h2>

            <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    style={{ display:'block', width: '100%' }}
                />
                {errors.username && <small style={{ color: 'red' }}>{errors.username}</small>}
            </div>
            <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ display: 'block', width: '100%' }}
                />
                {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    style={{ display: 'block', width: '100%' }}
                />
                {errors.password && <small style={{ color: 'red' }}>{errors.password}</small>}
            </div>

            <button type="submit" style={{ padding: '0.5rem 1rem' }}>
                Register
            </button>
        </form>
    );
};

export default RegistrationForm;