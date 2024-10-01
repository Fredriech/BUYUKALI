import React from "react";
import "../static/navBar.css";
import { NavLink } from "react-router-dom";

function Navbar({ count }) {
  count = count ? count : "";
  return (
    <div className="app-name">
      <div className="logo">
        <span>BUYUKALI</span>
        {/* <img src="/src/images/logo2.png" /> */}
      </div>
      <div className="nav-link">
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link linker" : "linker"
              }
              to="/"
            >
              Registry
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link linker" : "linker"
              }
              to="/Market"
            >
              Shopping
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link linker" : "linker"
              }
              to="/Register"
            >
              Home
            </NavLink>
          </li>
          {count && (
            <li id="mycart-count">
              <div>
                <img src="/src/icons/shopping_cart.svg" />
                <span>{count}</span>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
