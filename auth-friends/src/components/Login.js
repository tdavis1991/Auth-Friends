import React, { useState, useReducer } from 'react';
import { api } from '../utils/api';

export default function Login (props) {
    const [error, setError] = useState()
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = event => {
        event.preventDefault()

        api()
            .post('/api/login', user)
            .then(res => {
                localStorage.setItem('token', res.data.payload)
                console.log(res.data.payload)
                props.history.push('/account')
            })
            .catch(err => {
                setError(err)
            })
    }

    const handleChange = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='username'
                value={user.username}
                placeholder='UserName'
                onChange={handleChange}
            />
            <input
                type='text'
                name='password'
                value={user.password}
                placeholder='Password'
                onChange={handleChange}
            />
            <button type='submit'>Login</button>
        </form>
    )
}