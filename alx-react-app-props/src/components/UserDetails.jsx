import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function UserDetails() {
  const userData = useContext(UserContext);
    return (
      <div>
        <h2>Name: {userData.name}</h2>
        <p>Email: {userData.email}</p>
      </div>
    );
  }
  
  export default UserDetails;