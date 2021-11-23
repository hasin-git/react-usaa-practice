import React from 'react';
import './App.css';

class SimpleForm extends React.Component {
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
                <input type="text" value={this.state.data} onChange={this.updateState} />
                <h4>{this.state.data}</h4>
            </div>
        );
    }
}
export default SimpleForm;