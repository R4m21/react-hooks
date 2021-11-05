import React from "react";
import ComponentE from "./ComponentE";
export const UserContext = React.createContext();
export const LastContext = React.createContext();

function ComponentC() {
  return (
    <UserContext.Provider value={"maniram"}>

 <LastContext.Provider value={'chauhan'}>
        <ComponentE />
        </LastContext.Provider>
    </UserContext.Provider>
  );
}

export default ComponentC;
