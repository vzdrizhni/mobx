import React, { Component } from 'react';

export default class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: this.props.initialCount ?? 0
        };
    }

    render() {
        return (
            <div>
                <button>+</button>
                <span>0</span>
                <button>-</button>
            </div>
        )
    }
}