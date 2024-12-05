import React from "react";
import { useLoaderData } from "react-router-dom";

const UserDetail = () => {
  const useDetailData = useLoaderData();
  console.log(useDetailData);
  return (
    <>
      <center>
        <h2>UserDetail</h2>
      </center>
    </>
  );
};

export const uerDetailLoader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

export default UserDetail;
