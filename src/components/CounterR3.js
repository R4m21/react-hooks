import React, { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterR3() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div>
      <div>count : {count}</div>
      <button onClick={()=>dispatch('increment')}>+</button>
      <button onClick={()=>dispatch('decrement')}>-</button>
      <button onClick={()=>dispatch('reset')}>0</button>
      <div>count two : {countTwo}</div>
      <button onClick={()=>dispatchTwo('increment')}>+</button>
      <button onClick={()=>dispatchTwo('decrement')}>-</button>
      <button onClick={()=>dispatchTwo('reset')}>0</button>
    </div>
  );
}

export default CounterR3;
