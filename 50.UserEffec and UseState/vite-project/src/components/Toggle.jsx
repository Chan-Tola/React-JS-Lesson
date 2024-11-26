import React, { useEffect, useState } from "react";

const Toggle = () => {
  const [value, setValue] = useState(0);
  const [texting, setTexting] = useState("");
  //   using useEffect for only increase and then make it re-render
  useEffect(() => {
    console.log("setvalue is worked");
  }, [value]);
  function increaseValue() {
    // setValue(e.target.value++);
    setValue(value + 1);
  }
  function handleOnchange(e) {
    setTexting(e.target.value);
  }
  return (
    <React.Fragment>
      <h1>{texting}</h1>
      <h2>{value}</h2>
      <input type="text" onChange={handleOnchange} />
      <button onClick={increaseValue}>Increase</button>
    </React.Fragment>
  );
};

export default Toggle;
