import React from "react";
import p1 from "../assets/react.svg";
import Links from "./Links";
import "./NavStyle.css";
const Navigation = () => {
  return (
    <>
      <div className="Navigation">
        <img src={p1} alt="logo" />
        <Links />
      </div>
    </>
  );
};

export default Navigation;
