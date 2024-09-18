import React from "react";
import "../static/Purchase.css";
import man from "../assets/man.jpg";

export default () => {
  return (
    <div className="Purchase-container">
      <h1>You are now buying</h1>
      <h3>This is your cart</h3>
      <div className="shop-card">
        <div className="image-box">
          <img src={man} alt="shopped" />
        </div>
        <div className="shopped-txt">
          <div>Type: Short dress</div>
          <div>Price: 25,000/=</div>
        </div>
        <div className="remove">
          <input type="checkbox" />X
        </div>
      </div>
      <div className="financial-service-box">
        <div id="fin-red">Mpesa</div>
        <div className="finn">NMB</div>
        <div id="fin-grn">CRDB</div>
        <div id="total-price">
          <p>Total Price: 70,000/=</p>
          <span>Mpesa Payment Number: 234567</span>
        </div>
      </div>
    </div>
  );
};
