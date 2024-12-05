import { Outlet, Link } from "react-router-dom";

const AboutLayout = () => {
  return (
    <>
      <h1 className="text-center text-4xl">About Page</h1>
      <div className="flex justify-center items-center gap-2">
        <Link to=".">vision</Link>
        <Link to="mission">mission</Link>
        <Link to="goal">Goal</Link>
      </div>
      <Outlet />
    </>
  );
};

export default AboutLayout;
