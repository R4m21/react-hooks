import axios from "axios";
import React, { useEffect, useState } from "react";

function DataFetching3() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((response) => {
        console.log(response);
        setPost(response.data);
      })
      .catch((error) => console.log(error));
  }, [idFromButtonClick]);
  return (
    <div>
      <input
        type="number"
        name=""
        id=""
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={() => setIdFromButtonClick(id)}>Fetch Post</button>
      <ul>
        <li key={post.id}>{post.title}</li>
      </ul>
    </div>
  );
}

export default DataFetching3;
