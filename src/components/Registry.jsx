import React, { useState } from "react";
import "../static/Registry.css";

function Registry() {
  const [changeReg, setChangeReg] = useState(false);

  return (
    <div className="regist-container">
      <div className="regist-wrapper">
        <div className={!changeReg ? "log-in" : "remove"}>
          <h2>Log-in</h2>
          <form className="Log--in">
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
            <p className="reset-pass">Forget password?</p>
            <input
              type="submit"
              value={"Log-in"}
              id="submit1"
              onClick={(e) => e.preventDefault()}
              className="submit-button"
            />
          </form>
        </div>
        <div className={changeReg ? "Sign--up" : "remove"}>
          <h2>Sign-in</h2>
          <form>
            <input
              className="type-input"
              type="Email"
              id="input01"
              placeholder="email"
            />
            <input
              className="type-input"
              id="input02"
              type="password"
              placeholder="password"
            />
            <input
              className="type-input"
              id="input03"
              type="password"
              placeholder="Comfirm password"
            />

            <input
              type="submit"
              value={"Sign-in"}
              id="submit2"
              onClick={(e) => e.preventDefault()}
              className="submit-button"
            />
          </form>
        </div>

        <div className="sign-in">
          <div>
            <h3>Hi! There, Welcome</h3>
            <p>please {changeReg ? "sign-in" : "log-in"} so that</p>
            <span>we can explore together</span>
            <div className="register">
              <div
                id="regg"
                onClick={() => {
                  setChangeReg((p) => !p);
                }}
              >
                {changeReg ? "Log-in" : "Sign-in"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registry;
