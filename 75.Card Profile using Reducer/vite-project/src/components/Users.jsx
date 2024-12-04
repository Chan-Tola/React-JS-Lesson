import people from "../Data";
import "./UsersStyle.css";
import "./CardStyle.css";
import React, { useReducer } from "react";

const CLEAR_LISTS = "CLEAR_LISTS";
const RESET_LISTS = "RESET_LISTS";
const REMOVE = "REMOVE";

const intitState = {
  users: people,
  // isLoading: true,
};
const reducer = (state, action) => {
  if (action.type === CLEAR_LISTS) {
    return { ...state, users: [] };
  }
  if (action.type === RESET_LISTS) {
    return { ...state, users: people };
  }
  if (action.type === REMOVE) {
    const newFileter = state.users.filter(
      (item) => item.id !== action.payload.id
    );
    return { ...state, users: newFileter };
  }
  throw new Error(action.type);
};

const Users = () => {
  const [state, dispatch] = useReducer(reducer, intitState);
  function handleClear() {
    dispatch({ type: "CLEAR_LISTS" });
  }
  function handleRemove(id) {
    dispatch({ type: "REMOVE", payload: { id } });
  }
  function handleReset() {
    dispatch({ type: "RESET_LISTS" });
  }
  return (
    <>
      <div className="conainter">
        {state.users.map((props) => {
          const { name, img, positions, id } = props;
          return (
            <div className="Container" key={id}>
              <div className="Cards">
                <p>{name}</p>
                <img src={img} />
                <p>{positions}</p>
                <button onClick={() => handleRemove(id)}>Remove</button>
              </div>
            </div>
          );
        })}
        {state.users.length === 0 ? (
          <button className="btn" onClick={handleReset}>
            Reset All
          </button>
        ) : (
          <button className="btn" onClick={handleClear}>
            Clear All
          </button>
        )}
      </div>
    </>
  );
};

export default Users;
