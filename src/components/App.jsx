import React from "react";
import Home from "./Home";
import Layout from "./Layout";
import { Loader as layoutLoader } from "../api";
import Market from "./Market";
import Stock from "./Stock";
import Purchase from "./Purchase";
import Registry from "./Registry";
import PageNotFound from "./pageNotFound";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MarketLayout from "./MarketLayout";

let MyApp = () => {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />} loader={layoutLoader}>
        <Route index element={<Registry />} />

        <Route path="Market" element={<Market />} />

        <Route path="Market/:id" element={<MarketLayout />}>
          <Route index element={<Stock />} />
          <Route path="Purchase" element={<Purchase />} />
        </Route>

        <Route path="Register" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={route} />;
};

export default MyApp;
