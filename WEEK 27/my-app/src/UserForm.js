import React, { useState, useEffect } from 'react';

const UserForm = ({ addUser, updateUser, selectedUser, setSelectedUser }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: { street: '', suite: '', city: '', zipcode: '' },
        phone: '',
        website: '',
        company: { name: '' },
    });

    useEffect(() => {
        if (selectedUser) {
            setFormData({
                ...selectedUser,
                address: { ...selectedUser.address },
                company: { ...selectedUser.company },
            });
        } else {
            setFormData({
                name: '',
                email: '',
                address: { street: '', suite: '', city: '', zipcode: '' },
                phone: '',
                website: '',
                company: { name: '' },
            });
        }
    }, [selectedUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setFormData((prev) => ({
                ...prev,
                [parent]: { ...prev[parent], [child]: value },
            }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedUser) {
            updateUser(formData);
            setSelectedUser(null);
        } else {
            addUser(formData);
        }
    };

    return (
        <form className="user-form" onSubmit={handleSubmit}>
            <h2>{selectedUser ? 'Edit User' : 'Add User'}</h2>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <h3>Address</h3>
            <div className="form-group">
                <label htmlFor="street">Street</label>
                <input
                    type="text"
                    id="street"
                    name="address.street"
                    value={formData.address.street}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="suite">Suite</label>
                <input
                    type="text"
                    id="suite"
                    name="address.suite"
                    value={formData.address.suite}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                    type="text"
                    id="city"
                    name="address.city"
                    value={formData.address.city}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="zipcode">Zipcode</label>
                <input
                    type="text"
                    id="zipcode"
                    name="address.zipcode"
                    value={formData.address.zipcode}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="website">Website</label>
                <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                    type="text"
                    id="company"
                    name="company.name"
                    value={formData.company.name}
                    onChange={handleChange}
                />
            </div>
            <div className="form-actions">
                <button type="submit">{selectedUser ? 'Update' : 'Add'}</button>
                {selectedUser && <button type="button" onClick={() => setSelectedUser(null)}>Cancel</button>}
            </div>
        </form>
    );
};

export default UserForm;
