import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

export default function ApiCom() {
  function apiFun() {
    console.log("=======>>>>>>");
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        console.log("res=====>>>", res);
      })
      .catch((err) => {
        alert("error");
      });
  }

  return (
    <>
      <Button className=" mt-5 ms-5" variant="primary" onClick={() => apiFun()}>
        API CALL
      </Button>
    </>
  );
}
