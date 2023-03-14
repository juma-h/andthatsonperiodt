import React from "react";
import { NavLink} from "react-router-dom";
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
              fontFamily: "'Dancing Script', cursive",
              fontSize: '60px',
              fontStyle: "bold"
            
            })}
            to={"/"}
          >
            <p>Under 18</p>
          </NavLink>
        </ul>
      </div>
      <div className="col-md-6 nav-link-container-right">
        <ul className="nav-links">
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "black" : "#fff",
              textDecoration: isActive ? "none" : "none",
              fontFamily: "'Dancing Script', cursive",
              fontSize: '60px',
              fontStyle: "bold"
            })}
            to={"/over18"}
          >
            <p>Over 18</p>
          </NavLink>
        </ul>
      </div>
    </nav>
  
  );
}

export default Navbar;
