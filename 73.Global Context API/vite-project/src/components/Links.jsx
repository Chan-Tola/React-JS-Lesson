import React from "react";
import User from "./User";
import "./LinksStyle.css";
const Links = () => {
  return (
    <>
      <ul className="LinksList">
        <li className="Links">
          <a href="#" className="Link">
            Home
          </a>
        </li>
        <li className="Links">
          <a href="#" className="Link">
            Contact
          </a>
        </li>
        <li className="Links">
          <a href="#" className="Link">
            About
          </a>
        </li>
        <li className="Links">
          <a href="#" className="Link">
            Info
          </a>
        </li>
      </ul>
      <User />
    </>
  );
};

export default Links;
