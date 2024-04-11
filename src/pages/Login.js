import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { user, login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Simulating a simple login logic
    if (username === "demo" && password === "password") {
      login(); // Update the user authentication state
      navigate("/"); // Redirect to the home page
    } else {
      setError("Invalid username or password");
    }
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full viewport height
    background: "#faf9f5", 
    width: "100%"
  };

  const formStyle = {
    background: "#ffffff", // White background for the form
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    width: "100%", // Full width
    maxWidth: "250px", // Maximum width for the form
    boxSizing: "border-box", // Include padding and border in width calculation
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "none",
    background: "#BB0000", // Red button background
    color: "#ffffff", // White button text
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        {user.authenticated ? (
          <p>You are already logged in as {user.role}. Please log in with admin credentials.</p>
        ) : (
          <>
            <h2 style={{ textAlign: "center" }}>The <b style={{ color: "#BB0000" }}>HUB</b></h2>
            <input
              type="text"
              placeholder="Username"
              style={inputStyle}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              style={inputStyle}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button style={buttonStyle} onClick={handleLogin}>
              Login
            </button>
            {error && <p style={{ color: "#BB0000", textAlign: "center" }}>{error}</p>}
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
