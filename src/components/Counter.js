import React, { Component } from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initialCount ?? 0,
    };
  }

  decrease = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  increase = () => {this.setState(prevState => ({ count: prevState.count + 1}))};

  render() {
    return (
      <div>
        <button onClick={this.increase}>+</button>
        <span>{this.state.count}</span>
        <button onClick={this.decrease}>-</button>
      </div>
    );
  }
}
