import React from "react";
import { memo } from "react";
import { Form, useNavigation } from "react-router-dom";

const Login = ({ loger }) => {
  const navigation = useNavigation();
  return (
    <div className="Log-in">
      <h2>{navigation.state === "submitting" ? "Loging in..." : "Log-in"}</h2>
      {loger()}
      <Form className="Log--in" method="POST" replace>
        <input
          className="type-input"
          name="email"
          type="email"
          placeholder="email"
          required
          pattern="[a-z0-9._%+\-]+@[a-z0-9._%+\-]+\.[a-z]{2,}$"
        />
        <input
          className="type-input"
          name="password"
          type="password"
          placeholder="password"
          required
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        />
        <p className="reset-pass">Forget password?</p>
        <input
          style={
            navigation.state === "submitting" ? { cursor: "progress" } : {}
          }
          type="submit"
          disabled={navigation.state === "submitting"}
          className="submit-button"
        />
      </Form>
    </div>
  );
};

export default memo(Login);
