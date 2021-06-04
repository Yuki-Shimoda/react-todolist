import React from "react";
import { connect } from 'react-redux';
import { addTodo,　delTodo, doneTodo } from '../actions';

const App = (props) => {
  return (
 //propsでconnect(親）からstateの値を受け取る　受け取りたいのは配列
    <React.Fragment>
      <h1>Todoリスト</h1>
      <input value={taskValue}/>
      <button onClick={() => {
        props.addTodo();
      }}>追加</button>
      
      <ul>
        {props.todos.map((todo) => {
          return (
            <li key={todo.id}>
            <label></label>
              <input type='checkbox' onChange={() => { props.doneTodo(todo) }} ></input>
              {todo.done ? <del>{ todo }</del> : <span>{todo}</span>}
            <button onClick={() => { props.delTodo(todo) }}>削除</button>
            </li>
          )
        })}
      </ul>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return (
  { todos: state.addDel}
  )
}
const mapDispatchToProps = dispatch => ({
  addTodo: (task) => dispatch(addTodo(task)),
  delTodo: (todo) => dispatch(delTodo(todo)),
  doneTodo: (todo) => dispatch(doneTodo(todo)) //
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

<style>
</style>