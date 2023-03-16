import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components";
import "./parent.css";

function ParentPage() {
  return (
    <div className="">
      <div className="col-12 col-sm-12 header-nav" style={{ position: "sticky", top: 0 }}>
        <Navbar />
      </div>

      <div className="col-12 col-sm-12 content" style={{ }}>
        <Outlet />
      </div>
    </div>
  );
}

export default ParentPage;

