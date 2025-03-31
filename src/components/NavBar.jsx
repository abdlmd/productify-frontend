import React from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex bg-gray-800 text-white pb-2 pt-2   font-semibold">
      <NavLink to="/">
        <img src={logo} alt="Logo" className="w-24 h-12 cursor-pointer" />
      </NavLink>
      <div className="flex  items-center font-sans gap-x-8  ">
        <NavLink
          className={({ isActive }) => (isActive ? "bg-gray-400 p-2" : "")}
          to="/notes"
        >
          <p>Notes</p>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "bg-gray-400 p-2" : "")}
          to="/tasks"
        >
          Tasks
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "bg-gray-400 p-2" : "")}
          to="/habits"
        >
          Habits
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
