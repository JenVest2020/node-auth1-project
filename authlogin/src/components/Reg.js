import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Registration = () => {
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

    const reg = e => {
        e.preventDefault();
        axiosWithAuth().post('/api/auth/register', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                history.push('/login');


            })
            .catch(err => {
                console.log('reg failed', err.message);
            })
    };

    return (
        <div>
            <h1>Please Register Now</h1>
            <form onSubmit={reg}>
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

                <button className='btn'>Submit</button>
            </form>
        </div>
    )
};

export default Registration;