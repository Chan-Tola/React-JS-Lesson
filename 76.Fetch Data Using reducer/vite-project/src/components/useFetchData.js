import React, { useEffect, useState } from "react";
import axios from "axios";
const useFetchData = (url) => {

  const [nameSport, setNameSport] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  useEffect(() => {
    const API = async () => {
      try {
        // we have 2 style to rep data
        // const rep = await axios(url);
        // 1 style
        // const data = rep.data;x`
        // 2 style
        const { data } = await axios(url);
        console.log(data);
        setNameSport(data);
      } catch (err) {
        setError(true);
        // console.log(err);
      }
      setLoading(false);
    };
    API();
  }, []);
  return { nameSport, isLoading, isError };
};
export default useFetchData;
