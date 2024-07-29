import React, { useState } from 'react';

function AddUser({ handleAddUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    handleAddUser({ name, email, gender, status });
    setName('');
    setEmail('');
    setGender('');
    setStatus('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
      <input type="text" value={gender} onChange={e => setGender(e.target.value)} placeholder="Gender" required />
      <input type="text" value={status} onChange={e => setStatus(e.target.value)} placeholder="Status" required />
      <button type="submit">Add User</button>
    </form>
  );
}

export default AddUser;
