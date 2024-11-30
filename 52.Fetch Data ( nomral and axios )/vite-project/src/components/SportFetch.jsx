import useFetchData from "./useFetchData";

const SportFetch = () => {
  // const url = "https://api.github.com/user";
  const url = "https://jsonplaceholder.typicode.com/users";
  const { nameSport, isLoading, isError } = useFetchData(url);
  if (isLoading) {
    return <h1>Loading...!</h1>;
  }
  if (isError) {
    return <h1>Something is wrong</h1>;
  }

  return (
    <>
      {nameSport.map(({ id, name, username, email }) => {
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
