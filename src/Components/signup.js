import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // ✅ Handle signup
  const handleSignup = (e) => {
    e.preventDefault();

    // Save user credentials in localStorage
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    // Alert success
    alert("Signup successful! Please login.");

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
