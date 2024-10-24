import React from "react";
import Home from "./Home";
import Layout from "./Layout";
import { authreq, loginLoader, dataLoader, loginAction } from "../utils";
import Market from "./Market";
import Stock from "./Stock";
import Purchase from "./Purchase";
import Registry from "./Registry";
import PageNotFound from "./PageNotFound";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  defer,
} from "react-router-dom";
import MarketLayout from "./MarketLayout";

let MyApp = () => {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route
          index
          element={<Registry />}
          loader={loginLoader}
          action={loginAction}
          errorElement={<PageNotFound />}
        />

        <Route
          path="Market"
          element={<Market />}
          loader={async ({ request }) => {
            const url = "http://localhost:5000/views/addata";
            // const auth = await ;
            return defer({ adData: authreq(url, request) });
          }}
          errorElement={<PageNotFound />}
        />

        <Route
          path="Market/:id"
          element={<MarketLayout />}
          errorElement={<PageNotFound />}
        >
          <Route index element={<Stock />} loader={dataLoader} />

          <Route
            path="Purchase"
            element={<Purchase />}
            loader={async ({ request }) => {
              const url = "http://localhost:5000/auth/checkAuth";
              return await authreq(url, request);
            }}
          />
        </Route>

        <Route
          path="Register"
          element={<Home />}
          loader={dataLoader}
          errorElement={<PageNotFound />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={route} />;
};

export default MyApp;
