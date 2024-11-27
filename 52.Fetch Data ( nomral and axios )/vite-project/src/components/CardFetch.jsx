import React, { useEffect, useState } from "react";
const CardFetch = () => {
  const url = "https://api.github.com/users";
  // const url = "https://jsonplaceholder.typicode.com/users";

  const [user, setUsers] = useState([]);
  const [isloading, setloading] = useState(true);
  // console.log(user);
  useEffect(() => {
    const userFetch = async () => {
      try {
        const respon = await fetch(url);
        //this is logical simple to catch error url
        if (respon.status == "404") {
          const mg = "Fetching failed";
          throw new Error(mg);
        }
        const responSucess = await respon.json();
        // console.log(responSucess);
        setUsers(responSucess);
      } catch (eror) {
        console.log(eror);
      }
      setloading(false);
    };
    userFetch();
  }, []);
  if(isloading){
    return <h2>Loading...!</h2>
  }
  return (
    <>
      {user.map(({ id, login, avatar_url, html_url }) => {
        return (
          <article key={id}>
            <img src={avatar_url} alt="" />
            <h2>{login}</h2>
            <h3>{html_url}</h3>
          </article>
        );
      })}
    </>
  );
};

export default CardFetch;
