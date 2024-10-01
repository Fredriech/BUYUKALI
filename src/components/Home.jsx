import React from "react";
import { useEffect, useState } from "react";
import "../static/Home.css";
import Loading from "./Loading";
import Cart from "../icons/shopping_cart.svg";
import { useOutletContext } from "react-router-dom";

export default function Home() {
  const [num, setNum] = useState(0);
  const [load, setLoad] = useState(true);
  const { Data } = useOutletContext();

  let hldImg = "hold-img";

  function changImage() {
    const len = Data.length;
    setNum((p) => (p < len - 1 ? p + 1 : 0));

    // hldImg = "hold-up-img";
  }
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
              {num < Data.length - 1 ? data[num + 1] : data[0]}
            </div>
            <div className="card-img">
              {num < Data.length - 2 ? data[num + 2] : data[0]}
            </div>
            <img alt="cart" src={Cart} className="cart" />
          </div>
        )}
      </main>
    </>
  );
}
