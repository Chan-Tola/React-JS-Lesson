import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const UserDetail = () => {
  const useDetailData = useLoaderData();
  // console.log(useDetailData);
  const { id, name, email } = useDetailData;
  return (
    <>
      <center>
        {/* <h2>UserDetail</h2>  */}
        <article key={id}>
          <h4>User id #{id}</h4>
          <h4>User name :{name}</h4>
          <h4>User Email :{email}</h4>
          <Link to="/user">Back</Link>
        </article>
      </center>
    </>
  );
};

export const uerDetailLoader = async ({ params }) => {
  const { id } = params;
  // console.log(id);
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  console.log(res);
  if (!res.ok) {
    throw new Error("Can't find user");
  } else {
    return res.json();
  }
};

export default UserDetail;
