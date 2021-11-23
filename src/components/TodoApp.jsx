import React from 'react';
import {connect} from 'react-redux';
import TodoList from './todos-list';
import '../App.css';

class TodoApp extends React.Component {
    render() {
        console.log('Inside Todo App...',this.props.todos);
        return(
            <div>
                <TodoList todos={this.props.todos} />           
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {todos: state.todos};
}

export default connect(mapStateToProps)(TodoApp);