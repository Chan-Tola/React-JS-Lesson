import React from "react";
import { Link } from "react-router-dom";
const UserError = () => {
  return (
    <>
      <h3>Somthing went wrong</h3>
      <Link to="/user">Back Home</Link>
    </>
  );
};

export default UserError;
