import React from "react";

const Users = ({ name, position, salary, id, getId }) => {
  // this is the way to create a function to get id from the parent
  // and then we use it to send ti back to parent to use when we need that id
  // we have 3 ways

  // this is way 1
//   const onClcikhandler = () => getId(id);
  // this is way 2
  //   function onClcikhandler() {
  //     getId(id);
  //   }
  return (
    <>
      <h2>{name}</h2>
      <h3>{position}</h3>
      <h4>{salary}</h4>
      {/*  this is way 3 */}
      <button onClick={() => getId(id)}>Click me</button>
    </>
  );
};

export default Users;
