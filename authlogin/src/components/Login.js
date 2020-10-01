import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    let history = useHistory();

    const login = e => {
        e.preventDefault();
        axios.post('http://localhost:4050/api/auth/login', credentials)
            .then(res => {
                console.log('login successful', res);
                history.push('/userlist');
            })
            .catch(err => {
                console.log('login failed', err.message);
            })
    };

    return (
        <div>
            <h1>Log In Here</h1>
            <form onSubmit={login}>
                <input
                    type='text'
                    name='username'
                    value={credentials.username}
                    placeholder='User Name here'
                    onChange={handleChange} />

                <input
                    type='text'
                    name='password'
                    value={credentials.password}
                    placeholder='Password here'
                    onChange={handleChange} />

                <button className='btn'>Log In</button>
            </form>
        </div>
    )
};

export default Login;