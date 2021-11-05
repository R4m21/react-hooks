import axios from "axios";
import React, { useEffect, useReducer } from "react";
const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCHING_SUCCESS":
      return {
        loading: false,
        error: "",
        post: action.payload,
      };
    case "FETCHING_ERROR":
      return {
        loading: false,
        error: "Something went wrong!",
        post: {},
      };
    default:
      return state;
  }
};

function DataFetching3() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/8")
      .then((res) => {
        dispatch({ type: "FETCHING_SUCCESS", payload: res.data });
        console.log(res);
      })
      .catch((err) => {
        dispatch({ type: "FETCHING_ERROR" });
      });
  }, []);
  const { loading, error, post } = state;
  return (
    <div>
      {state.loading ? "Loading" : state.post.title}
      {state.error ? state.error : null}
      <br />
      {loading ? "Loading" : post.title}
      {error ? error : null}
    </div>
  );
}

export default DataFetching3;
