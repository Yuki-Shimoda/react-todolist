//2.stateの更新 reducers
import { ADDTODO, DELTODO, DONETODO } from '../actions'

const initialState = {
  todos: [
    { text: "サンプル1", done: false },
    { text: "サンプル2", done: false },
  ],
};

const todos = (state = initialState, action) => {
    switch (action.type) {
        
        case ADDTODO:
            return { todos: [...state, action.todo] }
        
        case DELTODO:
            //指定したタスク以外で新しくstate.tasksの配列を作成しなおしている
            const newList1 = [...state]
            newList1.splice(action.index, 1)
            console.log(state)
            console.log(newList1)
            return { todos: newList1 }
        
        case DONETODO:
            const newList2 = [...state] //stateのtodo.id番目のオブジェクトのdoneを変更する
            newList2[action.id].done = !newList2[action.id].done
            return {todos: newList2}
        default:
            return state
    }
}
export default todos;