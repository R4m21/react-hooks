import React, { useEffect, useState } from "react";

function HookCounter1() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('')
  useEffect(() => {
    document.title = `Clicked ${count} times`;
    console.log(`useEffect -> updating title name`);
  },[count]);
  return (
    <div>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
}

export default HookCounter1;
