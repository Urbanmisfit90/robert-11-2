// Header.js
import React from "react";
import { useNavigate } from "react-router-dom";
import axiosWithAuth from "../axiosWithAuth";


const Header = () => {
  const navigate = useNavigate();

  const logout = () => {
    axiosWithAuth()
      .post("http://localhost:9000/api/logout")
      .then(() => {
        localStorage.removeItem("token");
        navigate("/"); 
      })
      .catch((error) => {
        console.error("Logout failed", error);
        
      });
  };

  return (
    <header>
      <h1>Friend Database</h1>
      <nav>
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/friends")}>Friends List</button>
        <button onClick={() => navigate("/friends/add")}>Add Friend</button>
        <button onClick={() => navigate("/logout")}>Logout</button>
      </nav>
    </header>
  );
};

export default Header;
