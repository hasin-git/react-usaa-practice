import React from 'react';
import './App.css';

class Keys extends React.Component {
    constructor() {
        super();
        this.state = {
            data : [
                {
                    value: 'Bob Jones',
                    id: 1
                },
                {
                    value: 'Sally Smith',
                    id: 2 
                },
                {
                    value: 'John Walter',
                    id: 3
                }
            ]
        }        
    }
    
    render() {
        return(
            <div>                
                {this.state.data.map((content, code) => <Child key={code} data={content} />)}
            </div>
        );
    }
}
class Child extends React.Component {
    render() {
        return (
            <div>
                {this.props.data.id}:{this.props.data.value}
            </div>
        )
    }
}

export default Keys;