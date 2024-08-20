import React from "react";
import "../static/Register.css";

export default function Login() {
  return (
    <div className="home-container">
      <div className="cool-mirror">
        <h4>INSPEKTA 6!</h4>
        <form>
          <label htmlFor="name">Username: </label>
          <input type="text" name="name" />
          {/* <label htmlFor="email">Email: </label>
          <input type="text" name="email" /> */}
          <label htmlFor="password">password: </label>
          <input type="text" name="password" />
          <div>
            <input type="submit" value={"Login"} />
          </div>
        </form>
      </div>
    </div>
  );
}
