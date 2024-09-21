import React from "react";
import "../static/Registry.css";

function Registry() {
  return (
    <div className="regist-container">
      <div className="regist-wrapper">
        <div className="log-in">
          <h3>Login Page</h3>
          <form>
            <input
              className="type-input"
              type="Email"
              id="input1"
              placeholder="email"
            />
            <input
              className="type-input"
              id="input2"
              type="password"
              placeholder="password"
            />
          </form>
        </div>
        <div className="sign-in">
          <h3>Hi! There, Welcome</h3>
          <p>please sign-in and</p>
          <span>let's explore together</span>
        </div>
      </div>
    </div>
  );
}

export default Registry;
