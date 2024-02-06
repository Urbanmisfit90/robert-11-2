// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Friends from "./components/Friends";
import AddFriend from "./components/AddFriend";
import Logout from "./components/Logout";

const App = () => {
  const token = localStorage.getItem("token");

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={token ? <Navigate to="/friends" /> : <Login />}
        />
        <Route
          path="/login"
          element={token ? <Navigate to="/friends" /> : <Login />}
        />
        <Route
          path="/friends"
          element={token ? <Friends /> : <Navigate to="/login" />}
        />
        <Route
          path="/friends/add"
          element={token ? <AddFriend /> : <Navigate to="/login" />}
        />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
};

export default App;
