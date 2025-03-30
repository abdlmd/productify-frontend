import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="">
      <Link to="/">
        <img
          src="../assets/logo.png"
          alt="Logo"
          className="w-24 h-12 cursor-pointer"
        />
      </Link>
    </div>
  );
}

export default NavBar;
