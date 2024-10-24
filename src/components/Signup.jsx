import React from "react";
import { Form, useNavigation } from "react-router-dom";

export default function Signup({ loger }) {
  const navigation = useNavigation();
  return (
    <div className="Log-in">
      <h2>{navigation.state === "submitting" ? "Signing in.." : "Sign-in"}</h2>
      {loger()}
      <Form method="POST" replace>
        <input
          className="type-input"
          type="email"
          name="email"
          placeholder="email"
          required
          pattern="[a-z0-9._%+\-]+@[a-z0-9._%+\-]+\.[a-z]{2,}$"
        />
        <input
          className="type-input"
          name="password1"
          type="password"
          placeholder="password"
          required
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        />
        <input
          className="type-input"
          name="password2"
          type="password"
          placeholder="Comfirm password"
          required
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        />
        <input
          style={
            navigation.state === "submitting"
              ? { cursor: "progress" }
              : { cursor: "pointer" }
          }
          type="submit"
          disabled={navigation.state === "submitting"}
          className="submit-button"
        />
      </Form>
    </div>
  );
}
