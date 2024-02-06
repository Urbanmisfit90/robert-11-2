// Logout.js
import React from "react";
import { useNavigate } from "react-router-dom";
import axiosWithAuth from "../axiosWithAuth";

const Logout = () => {
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
    <div>
      <h2>Logout</h2>
      <button onClick={logout}>Logout</button> 
    </div>
  );
};

export default Logout;