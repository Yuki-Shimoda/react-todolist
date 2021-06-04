//アクションを定義
//actions App.jsでイベントが起きたらここのオブジェクト内容をReducerに受け渡す
export const ADDTODO = 'addTodo'
export const DELTODO = 'delTodo'
export const DONETODO = 'doneTodo'

let nextTodoId = 0
export const addTodo = (todo) => {
        console.log(todo);
        return ({
        type: ADDTODO,
        id:  nextTodoId++,
        text: todo.text,
        done: false
        })
}
export const delTodo = (todo) => {
        return ({
        type: DELTODO,
        //{id:  task; }のオブジェクトをreducersに渡したい。
        id: todo.id,
        todo
        })
}
export const doneTodo = (todo) => {
        console.log(todo)
        return ({
        type: DONETODO,
        id: todo.id,
        done:todo.done
        })
}