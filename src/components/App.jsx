import React from "react";
import Home from "./Home";
import Layout from "./Layout";
import Market from "./Market";
import Stock from "./Stock";
import Purchase from "./Purchase";
import Registry from "./Registry";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MarketLayout from "./MarketLayout";

let MyApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Registry />} />

          <Route path="Market" element={<Market />} />

          <Route path="Market/:id" element={<MarketLayout />}>
            <Route index element={<Stock />} />
            <Route path="Purchase" element={<Purchase />} />
          </Route>

          <Route path="Register" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MyApp;
