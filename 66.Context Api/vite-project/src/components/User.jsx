/* This is u how can U sent all elements by props 
so now u can see how much is messy and alot of cods

import React from "react";
import "./UserStyle.css";
//This is the props tha need to export to Links.jsx
const User = ({ user, signout }) => {
  return (
    <>
      {user ? (
        <div className="MainUser">
          <p className="user">User: {user?.name}</p>
          <button className="btn" onClick={signout}>
            Sign Out
          </button>
        </div>
      ) : (
        <button className="btn">Sign In</button>
      )}
    </>
  );
  }; 
  export default User;
*/

/* now we have to set up aother style
import React, { useContext } from "react";
*/
import "./UserStyle.css";
import { useNavbarContext } from "./Navbar";
const User = () => {
  // const { user, signout } = useContext(navbarContext);
  const { user, signout } = useNavbarContext();
  return (
    <>
      {user ? (
        <div className="MainUser">
          <p className="user">User: {user?.name}</p>
          <button className="btn" onClick={signout}>
            Sign Out
          </button>
        </div>
      ) : (
        <button className="btn">Sign In</button>
      )}
    </>
  );
};

export default User;
