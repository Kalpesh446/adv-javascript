import React, { Component } from "react";

class ClassProps extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2>{this.props.name}</h2>;
  }
}

export default ClassProps;
