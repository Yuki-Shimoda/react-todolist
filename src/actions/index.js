//アクションを定義
//actions App.jsでイベントが起きたらここのオブジェクト内容をReducerに受け渡す
export const ADDTODO = 'addTodo'
export const DELTODO = 'delTodo'

let nextTodoId = 0
export const addTodo = (text) => ({
        type: ADDTODO,
        id: nextTodoId++,
        text:text
})
export const delTodo = (id) => ({
        type: DELTODO,
        id:id
})