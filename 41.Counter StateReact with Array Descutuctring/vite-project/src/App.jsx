import React from "react";

const App = () => {
    // this is function we can use when we want to add more item or delete
  const [counter, setCounter] = React.useState(0);
  const handleCounter = () => {
    return setCounter(counter + 1);
  };
  const handleDes = () => {
    return setCounter(counter -1);
  };
  return (
    <>
      <h2>{counter}</h2>
      <button onClick={handleCounter}>Increase</button>
      <button onClick={handleDes}>Descrease</button>
    </>
  );
};

export default App;
