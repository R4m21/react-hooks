import React, { useEffect, useState } from "react";

function HookMouse() {
  // const [mouseMove,setMouseMove] = useState({x:0,y:0})
  // const {x,y}=mouseMove
  // const logMousePosition = (e) => {
  //     setMouseMove({ x: e.clientX, y: e.clientY });
  //   };

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const logMousePosition = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      console.log("component unmounting code");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      Hooks x - {x} y - {y}
    </div>
  );
}

export default HookMouse;
