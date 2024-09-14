import React from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";
import Layout from "./Layout";
import Market from "./Market";
import Stock from "./Stock";
import Purchase from "./Purchase";

import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import MarketLayout from "./MarketLayout";

let MyApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<SignUp />} />

          <Route index element={<Market />} />

          <Route path="Market/:id" element={<MarketLayout />}>
            <Route index element={<Stock />} />
            <Route path="Purchase" element={<Purchase />} />
          </Route>

          <Route path="Home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MyApp;
