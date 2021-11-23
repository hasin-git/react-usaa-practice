import React from 'react';
import '../App.css';

class TodoInputList extends React.Component {
   handleClick(e)  {
        console.log("handleClick:....");
        const node = this.refs.input;
        const text = node.value.trim();
        console.log("handleClick:.text..."+text);
        this.props.onAddClick(text);
        node.value = "";
   }

    render() {
        console.log(this.props.todos);
        let list = this.props.todos.map(todo => <p>{todo}</p>)
        return(
            <div>
                <div>
                    <input type="text" ref="input" />
                    <button onClick ={(e) => this.handleClick(e)}>
                        Add
                    </button>                                
                </div>
                    {list} 
            </div>
        )
    }

}

export default TodoInputList;