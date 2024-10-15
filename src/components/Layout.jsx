import React from "react";
import Navbar from "./Navbar";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import "../static/Layout.css";
import { useState } from "react";

export default function Layout() {
  const [folders, setFolder] = useState({
    count: 0,
    paths: [],
  });
  const Data = useLoaderData();

  return (
    <div className="layout-box">
      <Navbar count={folders.count} />
      <div className="inner-container">
        <Outlet context={{ folders, setFolder, Data }} />
        <Footer />
      </div>
    </div>
  );
}
