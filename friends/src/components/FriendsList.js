import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api';
import '../App.css';

function FriendsList() {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        api()
            .get("/api/friends")
            .then(res => {
                setFriends(res.data)
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, [])
    
    return (
        <>
            <Link className="links" to="/account/friends/add-friends">Add Friends</Link>
            <Link className="links" to="/account/logout">Logout</Link>
            <div className="friends-container">
                {friends.map((list, index) => (
                    <div className="friend" key={index}>
                        <h3>Name: {list.name}</h3>
                        <p>Age: {list.age}</p>
                        <p>Email: {list.email}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default FriendsList;