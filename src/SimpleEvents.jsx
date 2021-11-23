import React from 'react';
import './App.css';

class SimpleEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : 'Please Click the button'
        }
        this.updateState = this.updateState.bind(this);
    };

    updateState() {
        this.setState({data: 'You clicked the button'});
    }

    render() {
        return(
            <div>
                <button onClick={this.updateState}>Click Here</button>
                <h4>{this.state.data}</h4>
            </div>
        );
    }
}
export default SimpleEvent;