import React, { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "updateFild":
      return { ...state, [action.field]: action.value };
  }
};
const initialState = {
  name: "",
  email: "",
  password: "",
};
function handleChange(event) {
  console.log("Input field name:", event.target.name); // Logs the name attribute
  console.log("Input field value:", event.target.value); // Logs the current input value
  dispatch({
    type: "updateField",
    field: event.target.name,
    value: event.target.value,
  });
}
const ChangeValue = () => {
  const [states, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <input
        type="text"
        value={states.name}
        onChange={handleChange}
        placeholder="text"
      />
      <input
        type="email"
        value={states.email}
        onChange={handleChange}
        placeholder="email"
      />
    </>
  );
};

export default ChangeValue;
