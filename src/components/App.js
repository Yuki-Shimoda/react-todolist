import React, { Component } from "react";
import { connect } from 'react-redux';
import { addTodo,delTodo } from '../actions';
import todos from "../reducers/addDel";

const App = (props) => {
  console.log(props.todos)

  return (
 //propsでconnect(親）からstateの値を受け取る　受け取りたいのは配列
    <React.Fragment>
      <h1>todoリスト</h1>
      <input />
      <button onClick={(e) => {
        props.addTodo(e);
        e.target.previousElementSibling.value = '';
      }}>追加</button>
      
      <ul>
        {console.log(props.todos)}
        {props.todos.map((todo, index) => { return (<li key={index}>{todo.text}<button onClick={() => { props.delTodo(index) }}>削除</button></li>) })}
      </ul>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  console.log(state);
  return (
  { todos: state.addDel}
  )
}
const mapDispatchToProps = dispatch => ({
  addTodo: (e) => dispatch(addTodo(e.target.previousElementSibling.value)),
  delTodo: (key) => dispatch(delTodo(key.Element))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
