import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Friends from './components/Friends';
import AddFriend from './components/AddFriend';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/add" element={<AddFriend />} />
      </Routes>
    </div>
  );
}

export default App;
