import React from "react";
import "../static/navBar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="app-name">
      <div className="logo">
        <img src="/src/images/logo2.png" />
      </div>
      <div className="nav-link">
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link linker" : "linker"
              }
              to="/Login"
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link linker" : "linker"
              }
              to="/Register"
            >
              Sign-up
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link linker" : "linker"
              }
              to="/Market"
            >
              Shooping
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link linker" : "linker"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
