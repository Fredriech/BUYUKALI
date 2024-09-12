import React from "react";
import "../static/MarketLayout.css";
import { NavLink, Outlet } from "react-router-dom";

export default () => {
  return (
    <div className="down-link">
      <ul className="linked">
        <li>
          <NavLink className="nav-linker" to=".." relative="Route">
            Back
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
