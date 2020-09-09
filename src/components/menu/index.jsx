import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const logout = () => {
    localStorage.clear();
  };

  return (
    <div>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Link onClick={logout} to="/login">
          Logout
        </Link>
      </div>
      <div>
        <Link to="/profile">Profile</Link>
      </div>
      <div>
        <Link to="/register">Register</Link>
      </div>
      <div>
        <Link to="/shelves">Shelves</Link>
      </div>
      <div>
        <Link to="/timeline">Timeline</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}
