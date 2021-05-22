//2.stateの更新 reducers
import { ADDTODO } from '../actions'

const initialState = { todos: [] }

export default  (state = initialState, action) => {
    switch (action.type) {
        case ADDTODO:
            return { todos: state.todos.push({ id: 1, text: 'aaa' }, { id: 2, text: 'aaa' }) }
        default:
            return state;
    }
}
