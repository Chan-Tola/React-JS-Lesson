import React from "react";
import Card from "./Card";
import Data from "../Data";
import "./UsersStyle.css";
import { useState } from "react";

const Users = () => {
  const [users, userSets] = useState(Data);
  function getIdUser(id) {
    const newFileter = users.filter((item) => item.id !== id);
    setUser(newFileter);
  }
  function handleClear() {
    userSets([]);
  }
  return (
    <>
      <div className="conainter">
        {users.map((item) => {
          return <Card {...item} getId={getIdUser} key={item.id} />;
        })}
        <button className="btn" onClick={handleClear}>
          Remove All
        </button>
      </div>
    </>
  );
};

export default Users;
