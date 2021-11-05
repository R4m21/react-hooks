import React, { useReducer } from "react";
const initialState = {
    firstCounter: 0,
    secondCounter: 10,
  };
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState.firstCounter;
    case "reset2":
      return initialState.secondCounter;
    default:
      return state;
  }
};

function CounterR3() {
  const [count, dispatch] = useReducer(reducer, initialState.firstCounter);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState.secondCounter);
  return (
    <div>
      <div>count : {count}</div>
      <button onClick={()=>dispatch('increment')}>+</button>
      <button onClick={()=>dispatch('decrement')}>-</button>
      <button onClick={()=>dispatch('reset')}>0</button>
      <div>count two : {countTwo}</div>
      <button onClick={()=>dispatchTwo('increment')}>+</button>
      <button onClick={()=>dispatchTwo('decrement')}>-</button>
      <button onClick={()=>dispatchTwo('reset2')}>0</button>
    </div>
  );
}

export default CounterR3;
