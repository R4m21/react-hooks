import axios from "axios";
import React, { useEffect, useState } from "react";

function DataFetching1() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        setLoading(false);
        setPost(res.data);
        setError("");
        console.log(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setPost({});
        setError("Something went wrong!");
        console.log(err);
      });
  }, []);
  return (
    <div>
      {loading?'Loading':post.title}
      {error?error:null}
    </div>
  );
}

export default DataFetching1;
