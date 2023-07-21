import React, { useState } from "react";
import "./InputCom.css";

export default function InputCom() {
  let [CarName, setCarname] = useState("");
  let [data, setData] = useState([]);

  function getData(e) {
    setCarname(e?.target?.value);
  }

  function addData(param) {
    setData([...data, CarName]);
    console.log(data);
    setCarname("");
  }

  return (
    <>
      <div>
        <label htmlFor="fn">Car Name:</label>
        <input
          type="text"
          value={CarName}
          placeholder="Enter Car name"
          onChange={(e) => getData(e)}
        />
        <button onClick={() => addData()}>add click</button>
      </div>
      {data.map((e, i) => {
        return <h2 key={i}>{e}</h2>;
      })}
    </>
  );
}
