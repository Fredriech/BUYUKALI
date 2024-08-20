import React from "react";
import "../static/navBar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="app-name">
      <h1>BUYUKALI</h1>
      <div className="nav-link">
        <ul>
          <li>
            <Link className="linker" to="/">
              Login
            </Link>
          </li>
          <li>
            <Link className="linker" to="/About">
              Sign-up
            </Link>
          </li>
          <li>
            <Link className="linker" to="/Home">
              Home
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
