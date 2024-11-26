import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [value, setValue] = useState("");
  const arr = ["a", "b"];
  const handdleOnchange = (e) => {
    setValue(e.target.value);
  };
//   const submitToArr = (e) => {
//     const newArr = arr.push(setValue(e.target.value));
//     setValue("");
//     console.log(newArr);
//   };
  return (
    <>
      <div className="card">
        <span className="card__title">Newsletter</span>
        <p className="card__content">{value}</p>
        <form className="card__form">
          <input
            onChange={handdleOnchange}
            type="text"
            placeholder="Your life"
          />
          <button className="card__button" onClick={() => (setValue = "")}>
            Reset
          </button>
          {/* <button className="card__button" onClick={submitToArr}>
            submit
          </button> */}
        </form>
      </div>
    </>
  );
};

export default App;
