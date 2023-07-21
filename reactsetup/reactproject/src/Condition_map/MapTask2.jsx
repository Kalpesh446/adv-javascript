import React from "react";

export default function MapTask2() {
  let names = ["Kalpesh", "Rahul", "Chandu"];
  let vehicle = [
    {
      name: "honda",
      age: 5,
      model: 2018,
    },
    {
      name: "splender",
      age: 6,
      model: 2015,
    },
    {
      name: "honda",
      age: 7,
      model: 2020,
    },
  ];

  return (
    <div>
      {names.map((e) => {
        return <h1>{e}</h1>;
      })}

      {vehicle.map((e) => {
        return (
          <div>
            <h1>Name : {e.name}</h1>
            <h1>age : {e.age}</h1>
            <h1>model:{e.model}</h1>
          </div>
        );
      })}
    </div>
  );
}
