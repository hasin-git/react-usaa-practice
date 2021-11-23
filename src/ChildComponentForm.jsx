import React from 'react';
import './App.css';

class ChildForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : 'Enter something to be echoed...'
        }
        this.updateState = this.updateState.bind(this);
    };

    updateState(element) {
        this.setState({data: element.target.value});
    }

    render() {
        return(
            <div>
                <Child childProp={this.state.data} updateStateProp={this.updateState}></Child>                
            </div>
        );
    }
}
class Child extends React.Component {
    render() {
        return(
            <div>
                <input type ="text" value={this.props.childProp} onChange={this.props.updateStateProp} />
                <h3>{this.props.childProp}</h3>
            </div>
        );
    }
}

export default ChildForm;