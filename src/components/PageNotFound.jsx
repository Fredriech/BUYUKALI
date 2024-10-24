import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div style={{ textAlign: "center", color: "blue" }}>
      <h1>404</h1>
      <h2>Page Not Found!</h2>
      <h3>This may be due to invalid search or server error</h3>
      <h4>try again! loading the page</h4>
      <h3>
        <Link
          style={{
            borderRadius: "4px",
            padding: "5px 2em",
            cursor: "pointer",
            color: "#010101",
            textDecoration: "none",
            backgroundColor: "rgb(215,215,220)",
          }}
          to="/"
        >
          {/* Try Again! */}
          return to home
        </Link>
      </h3>
    </div>
  );
}

export default PageNotFound;
