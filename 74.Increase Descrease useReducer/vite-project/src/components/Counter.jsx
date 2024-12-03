import React, { useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return { counter: state.counter + 1 };
    case "decrease":
      return { counter: state.counter - 1 };
  }
}
const Counter = () => {
  const initialState = { counter: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state.counter);
  function Increase() {
    dispatch({ type: "increase" });
  }
  function Decrease() {
    dispatch({ type: "decrease" });
  }
  return (
    <>
      <div
        style={{
          textAlign: "center",
          margin: "20px",
          fontSize: "34px",
        }}
      >
        <h1>{state.counter}</h1>
        <button onClick={Increase}>Increase</button>
        <button onClick={Decrease}>Descrease</button>
      </div>
    </>
  );
};
export default Counter;
