import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import '../App.css';


function Account() {
    
    
    return (
        <>
            <Link className="links" to="/account/friends">Friends</Link>
            <Link className="links" to="/account/friends/add-friends">Add Friends</Link>
            <Link className="links" to="/account/logout">Logout</Link>
        </>
    )
}

export default withRouter(Account)
