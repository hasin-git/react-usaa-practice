export const SIMPLE_ACTION = 'SIMPLE_ACTION';
export const ADD_TODO = 'ADD_TODO';

export function simpleAction(data) {
    return {
        type: SIMPLE_ACTION,
        example:data
    };
}

export function addTodo(todo) {
    console.log("addTodo(data):" +todo);
    return {
        type: ADD_TODO,
        text: todo
    };
}