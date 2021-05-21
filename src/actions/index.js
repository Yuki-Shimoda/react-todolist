//1.アクションを定義
export const ADDTODO = 'addTodo'
export const DELTODO = 'delTodo'

let nextTodoId = 0
export const addTodo = (text) => {
    return {
        type: ADDTODO,
        list: { id:nextTodoId, text: text }
    }
}
export const delTodo = () => {
    return {
        type: DELTODO
    }
}