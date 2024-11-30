/*This is u how can U sent all elements by props 
so now u can see how much is messy and alot of cods

import React from "react";
import User from "./User";
import "./LinkStyle.css";

//This is the props tha need to export to Navbar.jsx

const Links = ({ user, signout }) => {
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
      // this is the prop that get from the User.jsx
      <User user={user} signout={signout}/>
    </>
  );
};
export default Links; 
*/
import React from "react";
import User from "./User";
import "./LinkStyle.css";
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
