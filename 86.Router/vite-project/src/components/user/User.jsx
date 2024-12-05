import { useLoaderData } from "react-router-dom";

const User = () => {
  // const param = useParams();
  const dataFetch = useLoaderData();
  // console.log(data);
  return (
    <>
      <center>
        {dataFetch.map((e) => {
          return (
            <div key={e.id}>
              <h2>{e.name}</h2>
            </div>
          );
        })}
      </center>
    </>
  );
};

export const userLoader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

export default User;
