import React, { useContext } from 'react';
import UserContext from '../components/UserContext';

function UserProfile(){
  const { name, email } = useContext(UserContext);
  return (
      <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '5px' }}>
        <h2 style={{ color: 'blue', fontSize: '24px' }}>{name}</h2>
        <p>
          Email: <span style={{ fontWeight: 'bold', fontSize: '18px' }}>{Email}</span>
        </p>
      </div>
    );
}
  
export default UserProfile;