
import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../axiosWithAuth';

const Friends = () => {
  const [friends, setFriends] = useState([]);

  const getFriends = async () => {
    axiosWithAuth().get('http://localhost:9000/api/friends').then(res => {
        console.log(res.data);
        setFriends(res.data);
    })
  }

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <div>
      <h1>Friends List</h1>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>{friend.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Friends;
