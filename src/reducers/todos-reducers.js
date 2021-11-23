import { SIMPLE_ACTION, ADD_TODO } from "../actions/todos-actions";

//const initialState = ["one", "two", "three"];
const initialState = [];

export default function todosReducer(state = initialState, action) {
    console.log("TodosReducer:action.action.type:" + action.type);
    console.log("TodosReducer:action.text:" + action.text);
    switch(action.type) {
        case SIMPLE_ACTION:
            return [
                ...state,
                action.payload
            ];
            break;
        case ADD_TODO:
            return [
                ...state,
                action.text
            ];
        default:
            return state;
    }
}