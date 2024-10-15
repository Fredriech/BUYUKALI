import React, { useState } from "react";
import "../static/Registry.css";
import { getData } from "../api";

function Registry() {
  const [changeReg, setChangeReg] = useState({
    isLog: false,
    passComf: "",
    pass: "",
    myemail: "",
    password: "",
    Email: "",
  });

  const handleSubmit = () => {
    console.log("submitted");

    const url = "http://localhost:5000";
    async function newData() {
      try {
        const data = await getData(url);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    newData();
  };

  function handleChange(e) {
    setChangeReg((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }
  return (
    <div className="regist-container">
      <div className="regist-wrapper">
        <div className={!changeReg.isLog ? "log-in" : "remove"}>
          <h2>Log-in</h2>

          <form className="Log--in" method="POST">
            <input
              className="type-input"
              name="Email"
              value={changeReg.Email}
              onChange={handleChange}
              type="Email"
              id="input1"
              placeholder="email"
            />
            <input
              className="type-input"
              id="input2"
              name="password"
              value={changeReg.password}
              onChange={handleChange}
              type="password"
              placeholder="password"
            />
            <p className="reset-pass">Forget password?</p>
            <input
              type="submit"
              value={"Log-in"}
              id="submit1"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="submit-button"
            />
          </form>
        </div>
        <div className={changeReg.isLog ? "Sign--up" : "remove"}>
          <h2>Sign-in</h2>
          <form method="POST">
            <input
              className="type-input"
              type="Email"
              name="myemail"
              value={changeReg.myemail}
              onChange={handleChange}
              id="input01"
              placeholder="email"
            />
            <input
              className="type-input"
              id="input02"
              name="pass"
              value={changeReg.pass}
              onChange={handleChange}
              type="password"
              placeholder="password"
            />
            <input
              className="type-input"
              id="input03"
              name="passComf"
              value={changeReg.passComf}
              onChange={handleChange}
              type="password"
              placeholder="Comfirm password"
            />

            <input
              type="submit"
              value={"Sign-in"}
              id="submit2"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="submit-button"
            />
          </form>
        </div>

        <div className="sign-in">
          <div>
            <h3>Hi! There, Welcome</h3>
            <p>please {changeReg.isLog ? "sign-in" : "log-in"} so that</p>
            <span>we can explore together</span>
            <div className="register">
              <div
                id="regg"
                onClick={() => {
                  setChangeReg((p) => {
                    return {
                      ...p,
                      isLog: !p.isLog,
                    };
                  });
                }}
              >
                {changeReg.isLog ? "Log-in" : "Sign-in"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registry;
