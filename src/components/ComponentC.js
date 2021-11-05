import React from "react";
import ComponentE from "./ComponentE";
export const UserContext = React.createContext();

function ComponentC() {
  return (
    <UserContext.Provider value={"maniram"}>
        <ComponentE />
    </UserContext.Provider>
  );
}

export default ComponentC;
