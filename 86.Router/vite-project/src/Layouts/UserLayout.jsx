import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <h1 className="text-4xl text-center">User Page</h1>
      <Outlet />
    </>
  );
};

export default UserLayout;
