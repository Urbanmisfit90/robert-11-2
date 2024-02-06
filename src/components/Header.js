
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/');
    }
  return (
    <header>
      <h1>Friend Database</h1>
      <nav>
        <button onClick={() => navigate('/')}>Login</button>
        <button onClick={() => navigate('/friends')}>Friends List</button>
        <button onClick={() => navigate('/add')}>Add Friend</button>
        <button onClick={logout}>Logout</button>
      </nav>
    </header>
  );
};

export default Header;
