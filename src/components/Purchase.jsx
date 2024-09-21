import React, { useEffect, useState } from "react";
import "../static/Purchase.css";
import { useOutletContext } from "react-router-dom";

export default () => {
  const [payService, setPayNumber] = useState({
    payNumber: 57825812,
    payComp: "Mpesa",
    isRemoved: false,
    cards: [],
  });
  const [folders] = useOutletContext();

  const generatePayNumber = (e) => {
    const myId = e.target.attributes.id.value;
    if (myId === "fin-red") {
      setPayNumber((p) => {
        return {
          ...p,
          payComp: "Mpesa",
          payNumber: 57825812,
        };
      });
    } else if (myId === "fin-blue") {
      setPayNumber((p) => {
        return {
          ...p,
          payComp: "NMB",
          payNumber: 2345679087,
        };
      });
    } else if (myId === "fin-grn") {
      setPayNumber((p) => {
        return {
          ...p,
          payComp: "CRDB",
          payNumber: 2366678894,
        };
      });
    }
  };
  console.log(payService.isRemoved);

  useEffect(() => {
    const takeCards = folders.paths.map((value, id) => {
      return (
        <div className="shop-card" key={id}>
          <label className="remove" htmlFor={`check-box${id}`}>
            <input
              type="checkbox"
              name={`isRemoved${id}`}
              checked={payService.isRemoved}
              onChange={(e) => {
                const nm = e.target.name;
                console.log(nm);
                setPayNumber((p) => {
                  return {
                    ...p,
                    isRemoved: !p.isRemoved,
                  };
                });
              }}
              id={`check-box${id}`}
            />
            X
          </label>

          <div className="image-box">
            <img src={value} alt="shopped" />
          </div>
          <div className="shopped-txt">
            <div>Type: short dress</div>
            <div>official</div>
            <div>price: 25,000/=</div>
          </div>
        </div>
      );
    });
    setPayNumber((p) => {
      return {
        ...p,
        cards: takeCards,
      };
    });
  }, []);

  return (
    <div className="Purchase-container">
      <h1>You are now buying</h1>
      <h3>This is your cart</h3>

      {payService.cards}

      <div className="financial-service-box">
        <div id="fin-red" onClick={generatePayNumber}>
          Mpesa
        </div>
        <div className="finn" id="fin-blue" onClick={generatePayNumber}>
          NMB
        </div>
        <div id="fin-grn" onClick={generatePayNumber}>
          CRDB
        </div>

        <div id="total-price">
          <p>Total price: 25,000/=</p>
          <p className="payers">
            <span>{payService.payComp} payment number: </span>
            <span id="pay-number">{payService.payNumber}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
