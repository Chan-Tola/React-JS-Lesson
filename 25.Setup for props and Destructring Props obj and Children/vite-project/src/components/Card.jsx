import React from "react";
import "./CardStyle.css";
const Card = ({ src, name, texting, children }) => {
  // another way
  //   const { src, name, texting } = props;
  return (
    <>
      <div className="container">
        <img src={src} />
        <h2>{name}</h2>
        <p>{texting}</p>
        {/* this is we call it children when we want to add another tag into the Post jsx */}
        {children}
      </div>
    </>
  );
};

export default Card;
