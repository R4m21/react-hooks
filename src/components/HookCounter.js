import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count+1);
  return (
    <div>
      <button onClick={incrementCount}>count {count}</button>
      <button onClick={()=>setCount(count+1)}>count {count}</button>
    </div>
  );
}

export default HookCounter;
