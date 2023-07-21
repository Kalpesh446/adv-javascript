import React, { useState } from "react";
import "./StateProject2";

export default function StateProject2() {
  let [index, setIndex] = useState(0);
  let colors = ["red", "blue", "yellow", "green"];
  function changeColor() {
    if (index < colors.length) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
    console.log("index:", index);
  }
  return (
    <div>
      <div className="div1">
        <h1 style={{ color: colors[index] }}>Box</h1>
      </div>
      <button onClick={() => changeColor()}>Click here</button>
    </div>
  );
}
