import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import { getToken } from './utils/api';
import ProtectedRoute from './components/ProtectedRoute';
import Account from './components/Account';
import FriendsList from './components/FriendsList';
import FriendsForm from './components/FriendsForm';
import Login from './components/Login';
import Logout from './components/Logout';
import './App.css';

function App() {
  const loggedOn = getToken();

  return (
    <div className="App">
      {!loggedOn && <Link to='/login'>Login</Link>}
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/account" component={Account} />
      <ProtectedRoute exact path="/account/friends" component={FriendsList} />
      <ProtectedRoute exact path="/account/friends/add-friends" component={FriendsForm} />
      <ProtectedRoute exact path="/account/logout" component={Logout} />
    </div>
  );
}

export default App;
