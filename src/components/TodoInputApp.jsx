import React from 'react';
import {connect} from 'react-redux';
import TodoInputList from './todos-inputList';
import { addTodo } from '../actions/todos-actions';

class TodoInputApp extends React.Component {
    render() {
        const { dispatch } = this.props;
        return(
            <div>
                <TodoInputList todos={this.props.todos} 
                    onAddClick = {text => dispatch(addTodo(text))}
                />           
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {todos: state.todos};
}

export default connect(mapStateToProps)(TodoInputApp);