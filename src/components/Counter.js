import React, { Component } from "react";
import { observer } from "mobx-react";
import { makeObservable, observable, action } from "mobx";

export const Counter = observer(
  class extends React.Component {
    count = 0;

    constructor(props) {
      super(props);
      makeObservable(this, { count: observable, decrease: action, increase: action });
    }

    decrease = () => {
      this.count -= 1;
    };

    increase = () => {
        this.count += 1;
    };

    render() {
      return (
        <div>
          <button onClick={this.increase}>+</button>
          <span>{this.count}</span>
          <button onClick={this.decrease}>-</button>
        </div>
      );
    }
  }
);
