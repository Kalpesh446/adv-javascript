import React from "react";
import { add, min } from "./Redux/count/countAction";
import { connect } from "react-redux";

function CountCom(props) {
  console.log(props);
  return (
    <>
      <h1>Count is {props.count}</h1>
      <button onClick={() => props.add()}>Increment</button>
      <button onClick={() => props.min()}>Decrement</button>
    </>
  );
}

const toStatetoProps = (state) => {
  return {
    count: state.x,
  };
};

// const toStatetoProp = (state) => {
//   return {
//     count: state.x,
//   };
// };

const toDispatchToProp = (dispatch) => {
  return { add: () => dispatch(add()) };
};

// const toDispatchToProps = (dispatch) => {
//   return { min: () => dispatch(min()) };
// };

export default connect(toStatetoProps, toDispatchToProp)(CountCom);
