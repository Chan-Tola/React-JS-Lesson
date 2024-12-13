import React from "react";
import { Link } from "react-router-dom";
const Card = ({ CardData }) => {
  return (
    <>
      {CardData.map(({ id, title, image, ep }) => {
        return (
          <Link key={id} to={id.toString()}>
            <div className="relative bg-white max-w-sm border-gray-200  rounded-lg shadow">
              {/* <img className="rounded-t-lg w-[200px] h-auto object-cover" src={pic} alt={title} />
               */}
              <div className="w-[350px] aspect-[4/3] overflow-hidden rounded-t-lg">
                <img
                  className="w-full h-full object-cover"
                  src={image}
                  alt={title}
                />
              </div>
              <div className="absolute  top-0 left-0 font-bold text-white flex w-full px-2  justify-between text-sm">
                <p>{ep}   episodes</p>
              </div>
              <div className="px-2 pb-9">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {title}
                </h5>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Card;
