import React from 'react';
import './App.css';

class SetState extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
        this.setStateHandler = this.setStateHandler.bind(this);
    }
    setStateHandler() {
        let value ="Hello";
        let simpleArray = this.state.data;
        simpleArray.push(value);
        this.setState({data: simpleArray})
    };
    render() {
        return (
            <div>
                <button onClick = {this.setStateHandler}>setState()</button>
                <h4>State: {this.state.data}</h4>
                <h4>State: {Math.random()}</h4>
            </div>
        );
    }
}

export default SetState;