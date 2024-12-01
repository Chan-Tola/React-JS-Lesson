import React from "react";
/*
  this is where use import the useGlobalContext that we have create
  it in the Context.jsx
*/
import { useGlobalContext } from "../Context";
import "./UserStyle.css";
const User = () => {
  /*
  okay we have to create a objects variable to store whatever that we have create it in
  the Context.jsx
  */
  const { user, signOut } = useGlobalContext();
  return (
    <>
      {
        /* for now this is a syntax that we use to show and close
              summay if the user value is true it show the p tag
              and if not close it.
        */
        user ? (
          <div className="MainUser">
            <p className="user">User: {user?.name}</p>
            <button className="btn" onClick={signOut}>
              Sign Out
            </button>
          </div>
        ) : (
          <button className="btn">Sign In</button>
        )
      }
    </>
  );
};

export default User;
