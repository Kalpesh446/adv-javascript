import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { increment, decrement } from "./feautures/count/countSlice";

export default function CountCom1() {
  let data = useSelector((state) => {
    return state?.COUNT;
  });

  const dispatch = useDispatch();
  return (
    <>
      <h1> count is {data?.count}</h1>
      <Button color="danger" onClick={() => dispatch(increment())}>
        Increment
      </Button>
      <Button color="danger" onClick={() => dispatch(decrement())}>
        Decrement
      </Button>
    </>
  );
}
