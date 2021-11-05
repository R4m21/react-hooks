import React from "react";
import { UserContext } from "./ComponentC";

function ComponentF() {
  return (
    <div>
      component f
      <UserContext.Consumer>
        {(user) => <div>user : {user}</div>}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
