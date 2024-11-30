import React, { useEffect, useState } from "react";
import { useRef } from "react";
const InputForm = () => {
  const [username, setUserame] = useState("");
  const [email, setEmail] = useState("");
  const [members, setMembers] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    // if does not have the input which dont let it go
    if (!email || !username) return null;
    // add fake id
    const id = Date.now();
    const addMember = { id, email, username };
    const UpdateMember = [...members, addMember];
    setMembers(UpdateMember);
    setEmail("");
    setUserame("");
  }
  function handleRemoved(id) {
    const filterMember = members.filter((m) => {
      return m.id !== id;
    });
    setMembers(filterMember);
  }
  useEffect(() => {
    // store data in local storage
    const storeMembers = localStorage.getItem("members");
    if (storeMembers) {
      try {
        setMembers(JSON.parse(storeMembers));
      } catch (error) {
        console.error("Failed to parse members from localStorage:", error);
      }
    }
  }, []);
  useEffect(() => {
    if (members.length > 0) {
      localStorage.setItem("members", JSON.stringify(members));
    }
  }, [members]);
  // create Input focus
  const InputRef = useRef(null);
  useEffect(() => {
    InputRef.current.foucs();
  });
  return (
    <>
      <section className="text-3xl m-auto mt-[20%] flex justify-evenly p-4 w-5/5 rounded-xl">
        <section>
          <div
            id="login"
            className="w-72 bg-sky-50 rounded shadow flex flex-col justify-between p-3"
          >
            <a
              href="#"
              className="border border-sky-500 bg-sky-50 hover:bg-sky-100 rounded text-sky-500 p-2 font-bold flex flex-row gap-3 justify-center"
            >
              <span>Log in with</span>
              <svg
                y="0"
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                width="100"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
                height="100"
                className="w-6 h-10 fill-current"
              >
                <path
                  d="M100,10.71V89.29A10.73,10.73,0,0,1,89.29,100H69.81V64.85H81.46L83.68,50.3H69.85V40.85c0-4,1.94-7.85,8.15-7.85h6.27V20.65a76.54,76.54,0,0,0-11.2-1c-11.42,0-18.88,7-18.88,19.57V50.3H41.49V64.85h12.7V100H10.71A10.73,10.73,0,0,1,0,89.29V10.71A10.73,10.73,0,0,1,10.71,0H89.29A10.73,10.73,0,0,1,100,10.71Z"
                  className=""
                ></path>
              </svg>
            </a>
            <span className="text-center text-xl font-bold  text-sky-500 opacity-50">
              or
            </span>
            <form className="text-sky-500">
              <label
                className="text-xl font-bold after:content-['*']"
                htmlFor="email"
              >
                Mail{" "}
              </label>
              <input
                ref={InputRef}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-xl p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-sky-500"
                id="email"
                value={email}
                type="email"
              />
              <label
                className="text-xl font-bold after:content-['*']"
                htmlFor="text"
              >
                Username{" "}
              </label>
              <input
                onChange={(e) => setUserame(e.target.value)}
                className="w-full p-2 mb-2 text-xl mt-1 outline-none ring-none focus:ring-2 focus:ring-sky-500"
                id="text"
                type="text"
                value={username}
              />
              <a
                href="#"
                className="block text-xs text-sky-500 text-right mb-4"
              >
                Forgot Password?
              </a>
              <button
                onClick={handleSubmit}
                className="w-full rounded bg-sky-500 text-sky-50 p-2 text-center font-bold hover:bg-sky-400"
              >
                Log In
              </button>
            </form>
          </div>
        </section>
        <section>
          <ul className="w-[550px] gap-3 grid">
            <div className="flex bolder underline gap-[14rem]">
              <p className="text-3xl">Email</p>
              <p className="text-3xl">Username</p>
            </div>
            {members.map(({ id, email, username }) => {
              return (
                <li
                  key={id}
                  className="text-gray-700 gap-5 bg-blue-300 flex align-center justify-between p-2 text-lg rounded-lg list-none"
                >
                  <p className="p-2 rounded-lg">{email}</p>
                  <p className="p-2 rounded-lg">{username}</p>
                  <button
                    onClick={() => handleRemoved(id)}
                    className="bg-red-400 p-2 rounded-lg uppercase"
                  >
                    remove
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      </section>
    </>
  );
};

export default InputForm;
