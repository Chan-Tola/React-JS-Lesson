import React, { useEffect, useState } from "react";
import axios from "axios";
const SportFetch = () => {
  const url = "https://api.github.com/users";
  const [nameSport, setNameSport] = useState([]);
  useEffect(() => {
    const API = async () => {
      try {
        // we have 2 style to rep data
        // const rep = await axios(url);
        // 1 style
        // const data = rep.data;
        // 2 style
        const { data } = await axios(url);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    API();
  }, []);
  return (
    <>
      {/* {nameSport.map((props) => {
        const { id } = props;
        return (
          <article key={id}>
            <h1></h1>
          </article>
        );
      })} */}
    </>
  );
};

export default SportFetch;
