import React, { Suspense, useState } from "react";
import "../static/Home.css";
import Loading from "./Loading";
import Cart from "../icons/shopping_cart.svg";
import { useLoaderData, Await } from "react-router-dom";

export default function Home() {
  const [num, setNum] = useState(0);
  const loadedData = useLoaderData();

  return (
    <main className="main-container">
      <Suspense fallback={<Loading />}>
        <Await resolve={loadedData.viewData}>
          {(Data) => {
            const data = Data.map((value) => {
              return (
                <div className="img-in">
                  <img
                    key={value.id}
                    src={value.url}
                    className="show-img"
                    alt="mem image"
                  />
                </div>
              );
            });
            function changImage() {
              const len = Data.length;
              setNum((p) => (p < len - 1 ? p + 1 : 0));
            }

            return (
              <div className="contain-img">
                {data[num]}
                <div className="hold-img" onClick={changImage}>
                  {num < Data.length - 1 ? data[num + 1] : data[0]}
                </div>
                <div className="card-img">
                  {num < Data.length - 2 ? data[num + 2] : data[0]}
                </div>
                <img alt="cart" src={Cart} className="cart" />
              </div>
            );
          }}
        </Await>
      </Suspense>
    </main>
  );
}
