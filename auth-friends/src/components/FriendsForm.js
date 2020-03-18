import React, { useState } from 'react';
import { api } from '../utils/api';

export default function FriendsForm() {
    const [friend, setFriend] = ({
        name: '',
        age: 29,
        email: ''
    })

    const handleChange = e => {
        setFriend({
            ...friend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        api()
            .post('/api/friends', friend)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <Link className="links" to="/account/friends">Friends</Link>
            <Link className="links" to="/account/logout">Logout</Link>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={friend.name}
                    placeholder="Name"
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="age"
                    value={friend.age}
                    placeholder="Age"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="email"
                    value={friend.email}
                    placeholder="Email"
                    onChange={handleChange}
                />
                <button type="submit">Add Friend</button>
            </form>
        </div>
    )
}