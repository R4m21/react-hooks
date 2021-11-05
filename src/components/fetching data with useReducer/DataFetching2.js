import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  error: "",
  post: {},
};
const reducer = (state, action) => {
  switch (action.get) {
    case '1':
        console.log(action);
      return { loading: false, post: action.val.title };
    case '0':
      return { loading: false, error: action.val};
    default:
      return state
  }
};
function DataFetching2() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        console.log(res.data);
        dispatch({ get: '1', val: res.data });
      })
      .catch((err) => {
        dispatch({ get: '0', val: "Something went wrong!" });
        console.log(err);
      });
  }, []);
  return (
    <div>
      {state.loading ? "Loading" : state.post}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetching2;
