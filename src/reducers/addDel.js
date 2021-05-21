//2.stateの更新
import { ADDTODO, DELTODO } from '../actions'

const initialState = {
    todos: []
}
//const initialState = { val: 0 }

export default (state = initialState, action) => {
    switch (action.type) {
        case ADDTODO:
            const newList = [...state,{id: action.id, text: action.text}] //typeがADDTODOならtodos配列にadd処理
            return newList;
        case DELTODO:
            return state + 1; //typeがDELTODOならtodos配列からdelete処理
        default:
            return state;
    }
}