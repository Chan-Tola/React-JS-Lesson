import { useReducer } from "react";
import useFetchData from "./useFetchData";
const url = "https://jsonplaceholder.typicode.com/users";

const initState = {
  users: data,
  isLoading: True,
  isError: false,
};
const reducer = (state, action) => {};
const SportFetch = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const { isError, isLoading, users } = state;
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

export default SportFetch;
