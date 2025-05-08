import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => {
          setUserName(e.target.value);
        }}

    
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
    </div>
  );
};

export default Login;
