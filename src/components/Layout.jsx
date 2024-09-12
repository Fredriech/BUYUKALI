import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import "../static/Layout.css";

export default function Layout() {
  return (
    <div className="layout-box">
      <Navbar />
      <div className="inner-container">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
