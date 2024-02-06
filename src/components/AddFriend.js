
const AddFriend = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Submitted:', name, age, email);
        axiosWithAuth().post('http://localhost:9000/api/friends', {name, age, email}).then(res => {
            console.log(res.data);
            navigate('/friends');
        })
    };

    return (
        <div>
            <h2>Add Friend</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <br />
                <label>
                    Age:
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddFriend;
import React, { useState } from 'react';import axiosWithAuth from '../axiosWithAuth';
import { useNavigate } from 'react-router-dom';

