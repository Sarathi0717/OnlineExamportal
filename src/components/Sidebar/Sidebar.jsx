import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaClipboardList,
  FaUser,
  FaTrophy,
  FaSignOutAlt,
  FaBookOpen,
} from "react-icons/fa";

import {
  getUser,
  logoutUser,
} from "../../utils/localStorage";
import './Sidebar.scss';
function Sidebar() {
  const navigate = useNavigate();

  const user = getUser();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <aside className="sidebar">

      <div className="sidebar-header">

        <div className="profile-image">
          <FaUser size={50} />
        </div>

        <h3>{user ? user.name : "Student"}</h3>

        <p>{user ? user.email : "student@gmail.com"}</p>

      </div>

      <nav className="sidebar-menu">

        <NavLink to="/" className="menu-item">
          <FaHome />
          <span>Home</span>
        </NavLink>

        <NavLink to="/dashboard" className="menu-item">
          <FaClipboardList />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/exam" className="menu-item">
          <FaBookOpen />
          <span>Exam</span>
        </NavLink>

        <NavLink to="/leaderboard" className="menu-item">
          <FaTrophy />
          <span>Leaderboard</span>
        </NavLink>

        <NavLink to="/profile" className="menu-item">
          <FaUser />
          <span>Profile</span>
        </NavLink>

      </nav>

      <div className="sidebar-footer">

        <button
          className="logout-button"
          onClick={handleLogout}
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;