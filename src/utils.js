import { redirect, defer } from "react-router-dom";
import { Authenider, getData } from "./api";

function toBoolean(isVal) {
  return isVal === "true" ? true : false;
}

export async function authreq(url, request) {
  const loc = new URL(request.url);
  const token = localStorage.getItem("token");

  try {
    const result = await Authenider(url, token);
    return await result.json();
  } catch (err) {
    throw redirect(`/?message=${err.resText}&redirectTo=${loc.pathname}`);
  } finally {
    if (token === "") {
      throw redirect(`/?message=please login first&redirectTo=${loc.pathname}`);
    }
  }
}

export async function loginLoader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function loginAction({ request }) {
  const resp = await request.formData();
  const len = resp.values().toArray().length;

  const nURL = new URL(request.url).searchParams.get("redirectTo") || "/Market";

  let url = "http://localhost:5000/auth/login";
  let signTolog = true;
  let password;

  if (len === 3) {
    signTolog = resp.get("password1") === resp.get("password2") ? true : false;
    url = "http://localhost:5000/auth/signup";
    password = resp.get("password1");
  } else password = resp.get("password");

  let response = { mismatch: true, message: "password mismatch" };
  if (signTolog) {
    try {
      const data_request = {
        email: resp.get("email"),
        password: password,
      };
      response = await getData(url, data_request);
    } catch (err) {
      throw redirect(`/PageNotFound/?${err.resText}`);
    } finally {
      localStorage.setItem("user", response.user);
      localStorage.setItem("token", response.token);
      if (response.token !== "") {
        throw redirect(nURL);
      }
      return response;
    }
  }
}

export async function dataLoader({ request }) {
  const url = "http://localhost:5000/views/";
  // const auth = await authreq(url, request);
  return defer({ viewData: authreq(url, request) });
}
