import React, { useState } from 'react';
import axios from 'axios';

const UserSearch = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/service/searchusers/${name}`);
      setUsers(response.data);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('An error occurred while searching for users');
      setUsers([]);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center">
        <br/><br/><br/><br/>
  <div className="mb-3">
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="form-control"
      placeholder="Enter a name"
    />
  </div>
  <div className="mb-3">
    <button onClick={handleSearch} className="btn btn-primary">
      Search
    </button>
  </div>

  {errorMessage && <p>{errorMessage}</p>}

  <table className="table" style={{ width: '100%', borderCollapse: 'collapse' }}>
    <thead>
      <tr style={{ borderBottom: '1px solid #ccc' }}>
        <th style={{ padding: '10px' }}>Name</th>
        <th style={{ padding: '10px' }}>Address</th>
        <th style={{ padding: '10px' }}>Email</th>
        <th style={{ padding: '10px' }}>Bio</th>
        <th style={{ padding: '10px' }}>Contact Number</th>
        <th style={{ padding: '10px' }}>Service Deliveries</th>
        <th style={{ padding: '10px' }}>Revenue</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user._id} style={{ borderBottom: '1px solid #ccc' }}>
          <td style={{ padding: '10px' }}>{user.username}</td>
          <td style={{ padding: '10px' }}>{user.address}</td>
          <td style={{ padding: '10px' }}>{user.email}</td>
          <td style={{ padding: '10px' }}>{user.bio}</td>
          <td style={{ padding: '10px' }}>{user.phone}</td>
          <td style={{ padding: '10px' }}>{user.service_deliveries}</td>
          <td style={{ padding: '10px' }}>{user.revenue}</td>
        </tr>
      ))}
    </tbody>
  </table>
  <br/><br/><br/><br/><br/><br/><br/><br/>
</div>

  );
};

export default UserSearch;