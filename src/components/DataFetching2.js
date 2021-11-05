import axios from "axios";
import React, { useEffect, useState } from "react";

function DataFetching2() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        console.log(response);
        setPost(response.data);
      })
      .catch((error) => console.log(error));
  },[id]);
  return (
    <div>
      <input
        type="number"
        name=""
        id=""
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <ul>
          <li key={post.id}>{post.title}</li>
      </ul>
    </div>
  );
}

export default DataFetching2;
