import React from "react";
import "./IncreaseBtn.css";
import { useRef, useState } from "react";
const IncreaseBtn = () => {
  //   useRef it is stand for ref to DOM
  // useRef do not re-render.
  const ref = useRef(null);
  const [number, setNumber] = useState(0);
  const handlerClick = () => {
    // if i do not set teh setNumber
    // so the number in the className num it not work while I use the ref.current
    setNumber(number + 1);
    ref.current++;
    console.log(`number : ${number}`);
    console.log(`ref : ${ref.current}`);
  };
  return (
    <>
      <section className="container">
        <div>
          <h1 className="num">{ref.current}</h1>
          <button className="increaseBtn" onClick={handlerClick}>
            Count
          </button>
        </div>
      </section>
    </>
  );
};

export default IncreaseBtn;
