import React from "react";
import "../static/navBar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="app-name">
      <h1>BUYUKALI</h1>
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
              to="/"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link linker" : "linker"
              }
              to="/Home"
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
