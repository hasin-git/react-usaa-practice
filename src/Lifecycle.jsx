import React from 'react';
import './App.css';

class Lifecycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 0
        }
        this.setNewNumber = this.setNewNumber.bind(this);
    }
    setNewNumber() {        
        this.setState({data: this.state.data + 1})
    };
    render() {
        return (
            <div>
                <button onClick = {this.setNewNumber}>Lifecycle</button>
                <Content simpleNumber = {this.state.data}></Content>
            </div>
        );
    }
}

class Content extends React.Component {
    componentWillMount() {
        console.log('componentWillMount() was called...');
    }

    componentDidMount() {
        console.log('componentDidMount() was called...');
    }

    componentWillReceiveProps(newProps) {
        console.log('componentWillReceiveProps() was called...');
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate() was called...');
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate() was called...');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate() was called...');
    }
    componentWillUnmount() {
        console.log('componentWillUnMount() was called...');
    }

    render() {
        return(
            <div>
                <h3>{this.props.simpleNumber}</h3>
            </div>
        );
    }
}

export default Lifecycle;