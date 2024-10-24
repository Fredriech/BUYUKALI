import React, { useState } from "react";
import "../static/Registry.css";
import Login from "./Login";
import Signup from "./Signup";
import insta from "/src/icons/5296765_camera_instagram_instagram logo_icon.svg";
import faceb from "/src/icons/734399_facebook_media_online_social_icon.png";
import gugo from "/src/icons/envelope.png";
import { useLoaderData, useActionData, Link } from "react-router-dom";

function Registry() {
  const [isLog, setIsLog] = useState(false);

  const loaderdata = useLoaderData();
  const actiondata = useActionData();

  function loginSignLinker() {
    return (
      <div className="sign-with-wrapper">
        <Link id="loglink" to="#">
          <img src={gugo} />
        </Link>
        <Link id="loglink" to="#">
          <img src={faceb} />
        </Link>
        <Link id="loglink" to="#">
          <img src={insta} />
        </Link>
      </div>
    );
  }

  return (
    <div className="regist-container">
      {loaderdata && <div className="logfirst">{loaderdata}</div>}
      {actiondata && <div className="logfirst">{actiondata.message}</div>}
      <div className="regist-wrapper">
        {!isLog ? (
          <Login loger={loginSignLinker} />
        ) : (
          <Signup loger={loginSignLinker} />
        )}
        {/* <Login loger={loginSignLinker} />
        <Signup loger={loginSignLinker} /> */}

        <div className="sign-in">
          <div>
            <h3>Hi! There, Welcome</h3>
            <p>please {!isLog ? "log-in" : "sign-in"} so that</p>
            <span>we can explore together</span>

            <div className="register">
              <div
                id="regg"
                onClick={() => {
                  setIsLog((p) => !p);
                }}
              >
                {isLog ? "Log-in" : "Sign-in"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registry;
