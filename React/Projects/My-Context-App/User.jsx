import React, { useContext } from 'react'
import UserContext from './UserContext';

const User = () => {

    const userInfo = useContext(UserContext);

  return (
    <div>
      <h2>User id - {userInfo.id}</h2>
      <h2>User name - {userInfo.name}</h2>
      <h2>User role - {userInfo.role}</h2>
    </div>
  )
}

export default User
