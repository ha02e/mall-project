import React from "react";
import { Link } from "react-router-dom";

function AboutPage(props) {
  return (
    <div className={"text-3xl"}>
      <div>
        <Link to={"/"}>Main</Link>
      </div>
      <div>About Page</div>
    </div>
  );
}

export default AboutPage;
