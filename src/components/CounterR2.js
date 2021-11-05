import React, { useReducer } from "react";
const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
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
      <div>{count.secondCounter}</div>
      <span>1st counter --- intialValue is 0 --- </span>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        +5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        -5
      </button>
      <br />
      <span>2nd counter --- intialValue is 10 --- </span>
      <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "increment2", value: 5 })}>
        +5
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 5 })}>
        -5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>0</button>
    </div>
  );
}

export default CounterR2;
