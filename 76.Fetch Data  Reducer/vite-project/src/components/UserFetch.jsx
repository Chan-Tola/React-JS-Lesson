import { useEffect, useReducer } from "react";
import axios from "axios";

const FETCH = "FETCH";
const ERROR = "ERROR";
const LOADING = "LOADING";
const url = "https://jsonplaceholder.typicode.com/users";

const intitState = {
  users: [],
  isLoading: true,
  isError: false,
};

const reducer = (state, action) => {
  if (action.type === FETCH) {
    return { ...state, users: action.payload.data };
  }
  if (action.type === ERROR) {
    return { ...state, isError: true };
  }
  if (action.type === LOADING) {
    return { ...state, isLoading: false };
  }
};

const UserFetch = () => {
  const [state, dispatch] = useReducer(reducer, intitState);
  const { isLoading, isError, users } = state;
  useEffect(() => {
    const API = async () => {
      try {
        const { data } = await axios(url);
        dispatch({ type: "FETCH", payload: { data } });
      } catch {
        dispatch({ type: "ERROR" });
      }
      dispatch({ type: "LOADING" });
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
      {users.map(({ id, name, username, email }) => {
        return (
          <article key={id}>
            {/* <img src={avatar_url} alt="" /> */}
            <h2>{name}</h2>
            <h2>{username}</h2>
            <h3>{email}</h3>
          </article>
        );
      })}
    </>
  );
};

export default UserFetch;
