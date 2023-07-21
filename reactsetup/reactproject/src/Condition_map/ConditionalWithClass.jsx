import React, { Component } from "react";

class ConditionalwithClass extends Component {
  constructor() {
    super();
    this.state = {
      isShow: true,
    };
  }

  handleClick() {
    this.setState((prevState) => ({
      isShow: !prevState.isShow,
    }));
  }

  render() {
    const { isShow } = this.state;
    return (
      <div>
        {isShow ? <h1>yes it is true</h1> : <h1>sorry it's false</h1>}
        <button onClick={() => this.handleClick()}>Click Here</button>
      </div>
    );
  }
}

export default ConditionalwithClass;
