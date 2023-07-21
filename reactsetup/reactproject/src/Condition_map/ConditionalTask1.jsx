import React, { useState } from "react";

export default function ConditionalTask1() {
  const [isShow, setIsShow] = useState(true);

  function handleClick() {
    setIsShow(!isShow);
  }

  return (
    <div>
      {isShow ? <h1>yes it is true</h1> : <h1>sorry it's false</h1>}
      <button onClick={handleClick}>Click Here</button>
    </div>
  );
}
