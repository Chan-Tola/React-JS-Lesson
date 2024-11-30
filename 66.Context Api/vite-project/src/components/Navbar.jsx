/*
This is u how can U sent all elements by props 
so now u can see how much is messy and alot of cods

import React, { useState } from "react";
import Links from "./Links";
import p1 from "../assets/react.svg";
import "./NavbarStyle.css";

const Navbar = () => {
  const [user, setUser] = useState({ name: "Tola" });
  function signout() {
    return setUser(null);
  }
  return (
    <>
      <div className="Navigation">
        <img src={p1} alt="logo" />
        <Links user={user} signout={signout} />
      </div>
    </>
  );
};

export default Navbar;
*/

/* Now we need to sovle all of that messy by using the 
  Context API that default from react JS
*/
import React, { createContext, useState, useContext } from "react";
import Links from "./Links";
import p1 from "../assets/react.svg";
import "./NavbarStyle.css";
// export const navbarContext = createContext(); this is for 1 style of using it with the import useContext
// to another file
// another style
const navbarContext = createContext();
export const useNavbarContext = () => useContext(navbarContext);
const Navbar = () => {
  const [user, setUser] = useState({ name: "Tola" });
  function signout() {
    return setUser(null);
  }
  return (
    <>
      <navbarContext.Provider value={{ user, signout }}>
        <div className="Navigation">
          <img src={p1} alt="logo" />
          <Links />
        </div>
      </navbarContext.Provider>
    </>
  );
};

export default Navbar;
