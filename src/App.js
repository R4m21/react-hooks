import React, { useReducer } from "react";
import "./App.css";
// import CounterR2 from './components/CounterR2';
// import CounterR3 from './components/CounterR3';
import ComponentA from "./components/useReducer with useContext/ComponentA";
import ComponentB from "./components/useReducer with useContext/ComponentB";
import ComponentC from "./components/useReducer with useContext/ComponentC";
// import ComponentC from './components/ComponentC';
// import CounterR1 from './components/CounterR1';
// import DataFetching3 from './components/DataFetching3';
// import DataFetching from './components/DataFetching';
// import DataFetching2 from './components/DataFetching2';
// import IntervalClassCounter from './components/IntervalClassCounter';
// import IntervalHookCounter from './components/IntervalHookCounter';
// import ClassMouse from './components/ClassMouse';
// import HookMouse from './components/HookMouse';
// import MouseContainer from './components/MouseContainer';
// import HookCounterFour from './components/HookCounterFour';
// import HookCounterThree from './components/HookCounterThree';
// import ClassCounter from './components/ClassCounter';
// import HookCounter1 from './components/HookCounter1';
// import HookCounter from './components/HookCounter';
// import HookCounterTwo from './components/HookCounterTwo';

export const CountContext = React.createContext();

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

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      {/* <ClassCounter/> */}
      {/* <HookCounter/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterFour/> */}
      {/* <HookCounter1/> */}
      {/* <ClassMouse/> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      {/* <IntervalClassCounter/>
    <IntervalHookCounter/> */}
      {/* <DataFetching/> */}
      {/* <DataFetching2/> */}
      {/* <DataFetching3/> */}
      {/* <ComponentC/> */}
      {/* <CounterR1/> */}
      {/* <CounterR2/> */}
      {/* <CounterR3/> */}
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <div>
          Count : {count}
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </div>
      </CountContext.Provider>
    </div>
  );
}

export default App;
