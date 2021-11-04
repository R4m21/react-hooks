import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <p>{name.firstName}</p>
      <p>{name.lastName}</p>
      <form action="">
        <input
          type="text"
          name="firstName"
          id=""
          value={name.firstName}
          onChange={(event) =>
            setName({ ...name, firstName: event.target.value })
          }
        />
        <input
          type="text"
          name="lastName"
          id=""
          value={name.lastName}
          onChange={(event) =>
            setName({ ...name, lastName: event.target.value })
          }
        />
        <p>{JSON.stringify(name)}</p>
      </form>
    </div>
  );
}

export default HookCounterThree;
