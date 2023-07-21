import React, { useState } from "react";

export default function StateProject1() {
  const [color, setColor] = useState("white");
  const [deFault, setdefault] = useState("true");
  function changeColor() {
    let b = "blue";
    let w = "white";
    setdefault(!deFault);
    setColor(deFault ? b : w);
  }

  return (
    <div>
      <div className="div1">
        <h1 style={{ color: color }}> Card Box</h1>
      </div>
      <button onClick={() => changeColor()}>Chnage color</button>
    </div>
  );
}
