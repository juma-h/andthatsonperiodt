import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components";

function ParentPage() {
  return (
    <div className="">
      <div className="col-12 col-sm-12" style={{position:"sticky", top: 0}}>
        <Navbar />
      </div>

      <div className="col-12 col-sm-12">
        <Outlet />
      </div>
    </div>
  );
}

export default ParentPage;
