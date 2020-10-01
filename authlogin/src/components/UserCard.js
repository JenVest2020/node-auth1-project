import React from 'react';

const UserCard = props => {
    console.log('from UserCard', props)

    return (
        <div>
            <h2>User Name: {props.user.username}</h2>
            <h2>Password: {props.user.password}</h2>
        </div>
    )
};

export default UserCard;