import React from 'react';

function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user._id}>{user.name} - {user.email} - {user.gender} - {user.status}</li>
      ))}
    </ul>
  );
}

export default UserList;
