//2.stateの更新 reducers
import { ADDTODO, DELTODO } from '../actions'

const todos = (state = [], action) => {
    switch (action.type) {
        case ADDTODO:
            return [...state, { id: action.id, text: action.text }]
        case DELTODO:
            const delList = [...state]
            return (
                delList.slice(action.id, 1)
            )
        default:
            return state;
    }
}
export default todos;