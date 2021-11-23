import React from 'react';
import '../App.css';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : ''
        }        
    };    

    render() {
        console.log(this.props.todos);
        let list = this.props.todos.map(todo => <p>{todo}</p>)
        return(
            <div>
                {list}             
            </div>
        );
    }
}

export default TodoList;