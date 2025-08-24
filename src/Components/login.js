import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // ✅ Handle login and redirect to HTML home page
  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve stored credentials
    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");

    if (email === savedEmail && password === savedPassword) {
      // Redirect to your existing HTML home page
      window.location.href = "/home.html";
    } else {
      alert("Invalid Credentials");
    }
  };

  // ✅ Guest login directly redirects to HTML home
  const handleGuestLogin = () => {
    window.location.href = "/home.html";
  };

  // ✅ Navigate to signup page (React route)
  const goToSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>

      <div className="extra-options">
        <button onClick={goToSignup}>Sign Up</button>
        <button onClick={handleGuestLogin}>Guest Login</button>
      </div>
    </div>
  );
}

export default Login;
