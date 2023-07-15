import React, { Component } from "react";

class ClassState extends Component {
  constructor() {
    super();
    this.x = 0;
    this.state = {
      count: 10,
    };
  }
  fun1(param) {
    this.x++;
    console.log("fun1 x", this.x);
  }
  fun2(param) {
    console.log("====>", this.state.count);
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.x}</h1>
        <button onClick={() => this.fun1()}>increment</button>
        <hr />
        <h1>{this.state.count}</h1>
        <button onClick={() => this.fun2()}>increment</button>
      </div>
    );
  }
}

export default ClassState;
