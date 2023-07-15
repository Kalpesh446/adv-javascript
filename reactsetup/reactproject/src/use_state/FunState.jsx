import React, { useState } from "react";

export default function FunState() {
  let [count, setcount] = useState(0);
  let x = 0;

  function updatecount(params) {
    x++;
    console.log("updatecount", x);
  }

  function updatestate(params) {
    setcount((pre) => pre + 1);
    console.log("upadate count", count);
  }

  return (
    <div>
      <h1>{x}</h1>
      <button onClick={() => updatecount()}>count increment</button>
      <hr />

      <h1>{count}</h1>
      <button onClick={() => updatestate()}>count increment</button>
    </div>
  );
}
