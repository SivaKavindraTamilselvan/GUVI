import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './UserList';
import UserForm from './UserForm';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const addUser = (newUser) => {
    axios.post('https://jsonplaceholder.typicode.com/users', newUser)
      .then(response => {
        setUsers([...users, response.data]);
      })
      .catch(error => console.error('Error adding user:', error));
  };

  const updateUser = (updatedUser) => {
    axios.put(`https://jsonplaceholder.typicode.com/users/${updatedUser.id}`, updatedUser)
      .then(response => {
        const updatedUsers = users.map(user =>
          user.id === updatedUser.id ? response.data : user
        );
        setUsers(updatedUsers);
      })
      .catch(error => console.error('Error updating user:', error));
  };

  const deleteUser = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
      })
      .catch(error => console.error('Error deleting user:', error));
  };

  return (
    <div className="container">
      <h1>User Management</h1>
      <UserForm addUser={addUser} updateUser={updateUser} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      <UserList users={users} deleteUser={deleteUser} setSelectedUser={setSelectedUser} />
    </div>
  );
};

export default App;
