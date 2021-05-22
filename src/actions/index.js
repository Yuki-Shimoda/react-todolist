//アクションを定義
//actions App.jsでイベントが起きたらここのオブジェクト内容をReducerに受け渡す
export const ADDTODO = 'addTodo'
export const DELTODO = 'delTodo'

let nextTodoId = 0
export const addTodo = () => ({
        type: ADDTODO,
})
export const delTodo = () => ({
        type: DELTODO
})