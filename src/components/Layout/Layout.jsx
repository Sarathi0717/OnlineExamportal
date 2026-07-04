import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

function Layout() {
  return (
    <div className="app-layout">
      {/* Navbar displayed only once */}
      <Navbar />

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;