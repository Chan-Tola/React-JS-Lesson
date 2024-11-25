import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [value, setValue] = useState(
    ""
  );
  const handdleOnchange = (e) => {
    setValue(e.target.value);
  };
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
        </form>
      </div>
    </>
  );
};

export default App;
