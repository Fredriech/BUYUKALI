import React, { useEffect, useState } from "react";
import "../static/Purchase.css";
import { useOutletContext } from "react-router-dom";

export default () => {
  const { folders, setFolder } = useOutletContext();

  const [payService, setPayNumber] = useState({
    payNumber: 57825812,
    payComp: "Mpesa",
    cards: [],
    totalPrice: 0,
  });

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
  const handlePayer = () => {
    if (payService.payComp === "NMB") {
      return "pay-numberNMB";
    } else if (payService.payComp === "CRDB") {
      return "pay-numberCRDB";
    } else {
      return "pay-number";
    }
  };

  useEffect(() => {
    let sum = 0;
    const takeCards = folders.paths.map((value, id) => {
      sum += Number(value.amount);
      return (
        <div className="shop-card" key={id}>
          <label className="remove" htmlFor={`check-box${id}`}>
            <input
              value="X"
              type="submit"
              onClick={() => {
                const pacels = folders.paths.filter((mypath) => {
                  return mypath.url !== value.url;
                });
                setFolder(() => {
                  return {
                    count: pacels.length,
                    paths: pacels,
                  };
                });
              }}
              id={`check-box${id}`}
            />
          </label>

          <div className="image-box">
            <img src={value.url} alt="shopped" />
          </div>
          <div className="shopped-txt">
            <div>Type: {value.type}</div>
            <div>{value.category}</div>
            <div>price: {value.amount}/= Tshs</div>
          </div>
        </div>
      );
    });
    setPayNumber((p) => {
      return {
        ...p,
        cards: takeCards,
        totalPrice: sum,
      };
    });
  }, [folders.paths]);

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
          <p>Total price: {payService.totalPrice}/= Tshs</p>
          <p className="payers">
            <span>{payService.payComp} payment number: </span>
            <span id={handlePayer()}>{payService.payNumber}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
