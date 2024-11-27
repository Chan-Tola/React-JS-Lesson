import React, { useEffect, useState } from "react";
import axios from "axios";
const SportFetch = () => {
  const url = "https://api.github.com/user";
  // const url = "https://jsonplaceholder.typicode.com/users";
  const [nameSport, setNameSport] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  useEffect(() => {
    const API = async () => {
      try {
        // we have 2 style to rep data
        // const rep = await axios(url);
        // 1 style
        // const data = rep.data;
        // 2 style
        const { data } = await axios(url);
        // console.log(data);
        setNameSport(data);
      } catch (err) {
        setError(true);
        // console.log(err);
      }
      setLoading(false);
    };
    API();
  }, []);
  if (isLoading) {
    return <h1>Loading...!</h1>;
  }
  if (isError) {
    return <h1>Something is wrong</h1>;
  }

  return (
    <>
      {nameSport.map(({ id, login, avatar_url, html_url }) => {
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

export default SportFetch;
