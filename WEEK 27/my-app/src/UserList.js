import React from 'react';

const UserList = ({ users, deleteUser, setSelectedUser }) => {
    return (
        <div className="user-list">
            <h2>User List</h2>
            {users.length > 0 ? (
                <ul>
                    {users.map(user => (
                        <li key={user.id} className="user-item">
                            <div className="user-info">
                                <p>{user.name} - {user.email}</p>
                            </div>
                            <div className="user-actions">
                                <button className="edit-btn" onClick={() => setSelectedUser(user)}>Edit</button>
                                <button className="delete-btn" onClick={() => deleteUser(user.id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No users available. Add some users to see them here.</p>
            )}
        </div>
    );
};

export default UserList;
