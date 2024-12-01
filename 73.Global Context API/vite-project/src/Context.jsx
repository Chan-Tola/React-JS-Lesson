import React from "react";
import { createContext, useContext, useState } from "react";

/*
  Detail about the global Context api
  First we have to creeate a variable that to createContext();
  then we must create about variables for make it into a function of useContext 
  and we can export it to use in everywhere that we want
*/
const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const Context = ({ children }) => {
  const [user, setUser] = useState({ name: "Tola" });
  function signOut() {
    setUser(null);
  }
  return (
    <GlobalContext.Provider value={{ user, signOut }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Context;
