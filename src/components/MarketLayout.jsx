import React from "react";
import "../static/MarketLayout.css";
import { NavLink, Outlet, useOutletContext } from "react-router-dom";

export default () => {
  return (
    <div className="down-link">
      <ul className="linked">
        <li>
          <NavLink className="nav-linker" to=".." relative="path">
            Back
          </NavLink>
        </li>
        <li>
          <NavLink
            to="."
            end
            className={({ isActive }) =>
              isActive ? "barbelow nav-linker" : "nav-linker"
            }
          >
            Stock
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "barbelow nav-linker" : "nav-linker";
            }}
            to="Purchase"
          >
            Shopped
          </NavLink>
        </li>
      </ul>
      <Outlet context={useOutletContext()} />
    </div>
  );
};
