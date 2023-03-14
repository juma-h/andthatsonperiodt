import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
   
    <nav className="header-nav row">
      <div className="col-md-6 nav-link-container-left">
        <ul className="nav-links">
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "black" : "#fff",
              textDecoration: isActive ? "none" : "none",
            })}
            to={"/"}
          >
            <h3>Under 18</h3>
          </NavLink>
        </ul>
      </div>
      <div className="col-md-6 nav-link-container-right">
        <ul className="nav-links">
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "black" : "#fff",
              textDecoration: isActive ? "none" : "none",
            })}
            to={"/over18"}
          >
            <h3>Over 18</h3>
          </NavLink>
        </ul>
      </div>
    </nav>
  
  );
}

export default Navbar;
