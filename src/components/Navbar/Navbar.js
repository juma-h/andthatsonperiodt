import React from "react";
import { Link } from "react-scroll";
import "./navbar.css";

function Navbar() {
  return (
    // <nav className="header-nav row">
    //   <div className="col-md-6 nav-h5nk-container-left">
    //     <ul className="nav-h5nks">
    //       <NavLink
    //         style={({ isActive }) => ({
    //           color: isActive ? "black" : "#fff",
    //           textDecoration: isActive ? "none" : "none",
    //           fontFamily: "'Dancing Script', cursive",
    //           fontSize: "40px",
    //           fontStyle: "bold",
    //         })}
    //         to={"/"}
    //       >
    //         <p>Under 18</p>
    //       </NavLink>
    //     </ul>
    //   </div>
    //   <div className="col-md-6 nav-h5nk-container-right">
    //     <ul className="nav-h5nks">
    //       <NavLink
    //         style={({ isActive }) => ({
    //           color: isActive ? "black" : "#fff",
    //           textDecoration: isActive ? "none" : "none",
    //           fontFamily: "'Dancing Script', cursive",
    //           fontSize: "40px",
    //           fontStyle: "bold",
    //         })}
    //         to={"/over18"}
    //       >
    //         <p>Over 18</p>
    //       </NavLink>
    //     </ul>
    //   </div>
    //   <div>

    //   </div>
    // </nav>
    <nav className="header-nav row">
      <div class="col-md-6">
        <h2>andthatsonperiodt.</h2>
      </div>
      <div class="col-md-6">
      <ul className="nav-links">
        <Link
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <h5>Intro | </h5>
        </Link>
        <Link
          activeClass="active"
          to="section2"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <h5>Phases | </h5>
        </Link>
        <Link
          activeClass="active"
          to="section3"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <h5>PMS | </h5>
        </Link>
        <Link
          activeClass="active"
          to="section4"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <h5>Menstrual Diseases | </h5>
        </Link>
        <Link
          activeClass="active"
          to="section5"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <h5>Birth Control Methods |  </h5>
        </Link>
        <Link
          activeClass="active"
          to="section6"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <h5>GeoMaps </h5>
        </Link>
      </ul>
      </div>
   
    </nav>
  );
}

export default Navbar;
