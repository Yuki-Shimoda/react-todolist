//2.stateの更新 reducers
import { ADDTODO, DELTODO, DONETODO } from '../actions'

const todos = (state = [], action) => {
    switch (action.type) {
        case ADDTODO:
            return [...state, { id: action.id, text: action.text, done: false }]
        
        case DELTODO:
    //指定したタスク以外で新しくstate.tasksの配列を作成しなおしている
            return state = state.filter((t) => t.id !== action.todo.id)
        
        case DONETODO:
            //console.log(action);
            //console.log(state);
            const newList = [...state]
            //console.log(newList[action.id].done)
            newList[action.id].done = !newList[action.id].done
            //console.log(newList[action.id].done)
            return state = newList;
        default:
            return state;
    }
}
export default todos;