import React from "react";
import { useEffect, useState } from "react";
import ServerData from "../ServerData.json";
import "../static/Home.css";
import Loading from "./Loading";
import Cart from "../icons/shopping_cart.svg";

export default function Home() {
  const [num, setNum] = useState(0);
  const [load, setLoad] = useState(true);

  let hldImg = "hold-img";

  function changImage() {
    const len = ServerData.length;
    setNum((p) => (p < len - 1 ? p + 1 : 0));

    // hldImg = "hold-up-img";
  }
  const data = ServerData.map((value) => {
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
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  }, []);

  return (
    <>
      <main className="main-container">
        {load ? (
          <Loading />
        ) : (
          <div className="contain-img">
            {data[num]}
            <div className={hldImg} onClick={changImage}>
              {num < ServerData.length - 1 ? data[num + 1] : data[0]}
            </div>
            <div className="card-img">
              {num < ServerData.length - 2 ? data[num + 2] : data[0]}
            </div>
            <img alt="cart" src={Cart} className="cart" />
          </div>
        )}
      </main>
    </>
  );
}
