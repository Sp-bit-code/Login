import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/login";
import Signup from "./Components/signup";
import NotFound from "./Components/NotFound";

// Redirect component to external HTML
function HomeRedirect() {
  window.location.href = "/home.html"; // Redirect to your home.html
  return null; // Component renders nothing
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Default redirect to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Authentication routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Redirect to home.html */}
        <Route path="/home" element={<HomeRedirect />} />

        {/* Catch-all 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
