import React, { Component } from "react";
import { connect } from 'react-redux';
import { addTodo,　delTodo, doneTodo } from '../actions';
import todos from "../reducers/addDel";

const App = (props) => {
  return (
 //propsでconnect(親）からstateの値を受け取る　受け取りたいのは配列
    <React.Fragment>
      <h1>Todoリスト</h1>
      <input />
      <button onClick={(e) => {
        props.addTodo(e);
        e.target.previousElementSibling.value = '';
      }}>追加</button>
      
      <ul>
        {props.todos.map((todo) => {
          return (
            <li key={todo.id}>
            <label></label>
              <input type='checkbox' onChange={() => { props.doneTodo(todo) }} ></input>
              {todo.done ? <del>{ todo.text }</del> : <span>{todo.text}</span>}
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
  addTodo: (e) => dispatch(addTodo(e.target.previousElementSibling.value)),
  delTodo: (todo) => dispatch(delTodo(todo)),
  doneTodo: (todo) => dispatch(doneTodo(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

<style>
</style>