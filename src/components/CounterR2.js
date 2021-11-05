import React, { useReducer } from "react";
const initialState = {
  firstCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstCounter: state.firstCounter + 1 };
    case "decrement":
      return { firstCounter: state.firstCounter - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function CounterR2() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>{count.firstCounter}</div>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>0</button>
    </div>
  );
}

export default CounterR2;
