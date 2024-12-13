import React from "react";
const LoginCard = () => {
  return (
    <form className="w-[27rem] rounded-md bg-[#212121] p-10 md:p-6">
      <h1 className="text-white text-center text-3xl mb-5">Movy</h1>
      <div className="mb-5">
        <label
          for="email"
          className="block mb-2 capitalize text-sm md:text-xl font-medium text-white dark:text-white"
        >
          email:
        </label>
        <input
          type="email"
          id="email"
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 md:text-xl text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2 md:p-4"
          placeholder="Email"
        />
      </div>
      <div className="mb-5">
        <label
          for="password"
          className="block mb-2 capitalize text-sm md:text-xl font-medium text-white dark:text-white"
        >
          password:
        </label>
        <input
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 md:text-xl text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2 md:p-4"
          required
        />
      </div>
      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <label for="remember" className="ms-2 text-sm font-medium text-white">
          Remember me
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Login
      </button>
    </form>
  );
};

export default LoginCard;
