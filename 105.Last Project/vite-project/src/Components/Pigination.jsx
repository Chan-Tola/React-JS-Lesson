import React, { useState } from "react";
const Pigination = ({ postPerPage, totalPost, pagination }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumber.push(i);
  }
  const [activePage, setActivePage] = useState(1);
  //   this is functon for click at get the number into the handlePageClick
  const handlePageClick = (number) => {
    // after get teh number so teh setActivePage get the number
    setActivePage(number);
    // and the pagination too.
    pagination(number);
  };
  return (
    <>
      <div className="relative">
        <div className="grid gap-2 grid-cols-6 w-full py-5">
          {/* this is pageNumber when it map and we have the parameter to access pageNumber childrens
            after that I use if else so when the actePage === Number for example number is 10 so the  condition is
            I want the button change color to blue.
        */}
          {pageNumber.map((number) => (
            <button
              key={number}
              className={`flex items-center justify-center w-12 h-12 font-serif rounded-lg transition ${
                activePage === number
                  ? "bg-gray-700 text-yellow-500"
                  : "bg-gray-700 text-white"
              }`}
              onClick={() => handlePageClick(number)}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pigination;
