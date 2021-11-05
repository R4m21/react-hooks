import React from "react";
import { LastContext, UserContext } from "./ComponentC";

function ComponentF() {
  return (
    <div>
      component f
      <UserContext.Consumer>
        {(user) => (
          <LastContext>
            {(last) => (
              <div>
                user : {user} , last : {last}
              </div>
            )}
          </LastContext>
        )}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
