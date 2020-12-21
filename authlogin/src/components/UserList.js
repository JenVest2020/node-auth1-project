import React, { useState, useEffect } from 'react';
import axios from 'axios';

import UserCard from './UserCard';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4050/api/users')
            .then(res => {
                console.log('get successful', res.data);
                setUsers(res.data)
            })
            .catch(err => {
                console.log('get failed', err.message)
            })
    }, []);

    return (
        <div>
            <h1>Users</h1>
            {users.map((user, id) => {
                return (
                    <UserCard
                        key={id}
                        user={user} />
                )
            })}
        </div>
    )
}

export default UserList;