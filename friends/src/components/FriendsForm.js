import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api';
import '../App.css';

function FriendsForm() {
    const [friend, setFriend] = useState({
        name: '',
        age: 20,
        email: ''
    })

    const handleSubmit = event => {
        event.preventDefault()

        api().post("/api/friends", friend)
            .then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
    }

    const handleChange = event => {
        setFriend({
            ...friend,
            [event.target.name]: event.target.value
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

export default FriendsForm;