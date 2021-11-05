import React, { useEffect, useState } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);
  const tick = () => {
    // setCount(count+1)//1
    setCount((prevCount) => prevCount + 1);
  };
  //   function doSomething() {
  //     console.log(someProps);//2
  // }
  useEffect(() => {
    // function doSomething() {
    //   console.log(someProps);//3
    // }
    // doSomething();//2,3
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
//   }, [count]);//1
//   }, [someProps]);//3
  }, []);
  return <div>{count}</div>;
}

export default IntervalHookCounter;
