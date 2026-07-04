import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Online Examination</h2>

      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>

        <li>
          <Link to="/signup">Register</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;