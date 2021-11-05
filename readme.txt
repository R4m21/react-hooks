What are Hooks?
-> hooks are new feature addition in react version 16.8 which allow you to use react features without having to write a class.
-> ex : State of a component
-> hooks don't work inside classes

why hooks?
-reason set1
-> understand how this keyword works in javascript
-> remember to bind event handlers in class components
-> classes don't minify very well and make hot reloading vary unreliable

-reason set2
-> there is no particular way to reuse stateful component logic
-> HOC and render props patterns do address this problem
-> makes the code harder to follow
-> there is need a to share stateful logic in a better way

-reason set3
-> create component for complex scenarios such as data fetching and subscribing to events related code is not organized in one place.
-> ex: Data fetching - in componentDidMount and componetDidUpdate
-> ex: Event liseners - in componentDidMount and componentDidUnmount
-> because of stateful logic - cannot break components into smaller ones

Noteworthy Points
-> react version 16.8 or higher
-> completely opt in
-> hooks don't contain any breaking changes and the release is 100% backwords-compatible
-> classes won't be removed from react
-> can't use hooks inside of class component
-> hooks don't replace your existing knowledge of react concepts
-> instead, hooks provide a more direct API to the react concepts you already know

summary
-> hooks are a new feature addition in react version 16.8
-> they allow you to use react feature without having to write a class
-> avoid the whole confusion with 'this' keyword
-> allow you to reuse stateful logic
-> organize the logic inside a component into reusable isolated units

Rule of Hooks
"only call Hooks at the Top lvel"
-> don't call hooks inside loops,condtions, or nested functions
"only call Hooks from react functions"
-> call them from within react functional components and not just any regular Javascript function

Summary useState
-> the useState hook lets you add state to functional components
-> in classes, the state is always an object
-> with the useState hook, the state doesn't have to be an object.
-> the useState hook returns an array with 2 elements
-> the first element is the current value of the state, and the second element is state setter function
-> new state value depends o the previous state?you can pass a function to the setter function
-> when dealing with objects or arrays, always make sure to spread your state variable and then call the setter function

useEffect
-> the effect hookslets you perform side effects in functional components
-> it is a close resplacement for componentDidMount, componentDidUpdate and componentDidUnmount

Context
-> context provides a way to pass data through the component tree without having to pass props down manually at every level.

useReducer
-> useReducer is a hook that is used for state management
-> it is an alternative to useState
-> what's the diffrence?
-> useState is built using useReducer
-> when to useReducer vs useState?

Hooks so far
-> useState - state
-> useEffect - side effects
-> useContext - context api
-> useReducer - reducers

reduce vs useReducer
----------------------------------------------------------------------------------------------------------
reduce in JavaScript                             | useReducer in React
----------------------------------------------------------------------------------------------------------
-> array.reduce(reducer,intialValue)             | -> useReducer(reducer,intialState)
-> singleValue = reducer(accumulator,itemValue)  | -> newState = reducer(currentState, action)
-> reduce method return a single value           | -> useReducer return a pair of values, [newState,dispatch]
----------------------------------------------------------------------------------------------------------

useReducer Summary
-> useReducer is a hook that is used for state management in React
-> useReducer is relate to reducer functions
-> useReducer(reducer,intialState)
-> reducer(currentState,action)

useReducer with useContext
-> useReducer - Local state management
-> share state between components - Global state management
-> useReducer + useContext

useState vs useReducer
----------------------------------------------------------------------------------------------------------
scenario                          |  useState                    |  useReducer
----------------------------------------------------------------------------------------------------------
-> type of state                  | -> Number, String, Boolean   | -> Object or Array
-> Number of state transitions    | -> One or Two                | -> Too many
-> related state transitions?     | -> No                        | -> Yes
-> business logic                 | -> no business logic         | -> complex business logic
-> Local vs Global                | -> Local                     | -> Global
----------------------------------------------------------------------------------------------------------

useCallback Hook
what?
-> useCallback is a hook that will return a memorized version of the callback function that only change if one of the dependencies has changed.
why?
-> it is useful when passing callbacks to optimized child components that rely on refrence equality-to prevent unnecessary renders.