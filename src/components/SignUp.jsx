import React from "react";
import "../static/Register.css";

export default function About() {
  return (
    <div className="home-container">
      <div className="cool-mirror">
        <h4>INSPEKTA 6!</h4>
        <form>
          <label htmlFor="name">Username: </label>
          <input type="text" name="name" />
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" />
          <label htmlFor="password1">password: </label>
          <input type="text" name="password1" />
          <label htmlFor="password2">comfirm password: </label>
          <input type="text" name="password2" />
          <div>
            <input type="submit" value={"Register"} />
          </div>
        </form>
      </div>
    </div>
  );
}
