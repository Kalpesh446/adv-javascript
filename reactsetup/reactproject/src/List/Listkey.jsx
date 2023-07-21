import React from "react";

export default function Listkey() {
  let names = ["kalpesh", "rahul", "jitu", "kapil"];

  function onclick() {
    console.log("this is onclick function");
  }

  return (
    <ul>
      {names.map((e, i) => {
        return (
          <li key={i} onClick={() => onclick()}>
            {e}
          </li>
        );
      })}
    </ul>
  );
}
