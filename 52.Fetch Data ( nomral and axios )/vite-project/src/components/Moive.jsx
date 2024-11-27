import axios from "axios";
import React, { useEffect, useState } from "react";

const Moive = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [movies, setMovies] = useState([]);
  console.log(movies);
  const [newMoives, setNewMoives] = useState({
    //   id: "",
    name: "",
    username: "",
  });
  useEffect(() => {
    const handleData = async () => {
      try {
        const { data } = await axios(url);
        // console.log(data);
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    handleData();
  }, []);
  // Update the name field
  const newName = (e) => {
    setNewMoives((prev) => {
      return {
        ...prev,
        name: e.target.value,
      };
    });
  };
  // Add new movie to the list
  const newUserName = (e) => {
    setNewMoives((prev) => {
      return {
        ...prev,
        username: e.target.value,
      };
    });
  };
  const handleSubmit = () => {
    if (newMoives.name && newMoives.username) {
      setMovies((prev) => {
        return [...prev, newMoives];
      });
      setNewMoives({ name: "", username: "" });
    } else {
      console.log("Both fields are required!");
    }
  };

  return (
    <>
      {movies.map(({ id, name, username }) => {
        return (
          <article key={id}>
            <p>name is :{name}</p>
            <p>username is :{username}</p>
          </article>
        );
      })}
      <div>
        <p>newName:{newMoives.name}</p>
        <p>newUsername: {newMoives.username}</p>
        <input type="text" value={newMoives.name} onChange={newName} />
        <br />
        <input type="text" onChange={newUserName} value={newMoives.username} />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};

export default Moive;
