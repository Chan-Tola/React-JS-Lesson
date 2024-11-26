import React from "react";
import "./CardStyle.css";
const Card = (props) => {
  const { id, name, img, positions, getId} = props;
  function handleClick() {
    getId(id);
    // console.log(props);
  }
  return (
    <>
      <div className="Container">
        <div className="Cards">
          <p>{name}</p>
          <img src={img} />
          <p>{positions}</p>
          <button onClick={handleClick}>Remove</button>
        </div>
      </div>
    </>
  );
};

export default Card;
