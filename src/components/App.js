import React, { Component } from "react";
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import todos from "../reducers/addDel";

const App = (props) => {
  return (
 //propsでconnect(親）からstateの値を受け取る　受け取りたいのは配列
    <React.Fragment>
      <h1>todoリスト</h1>
      <input />
      <button onClick={() => {
        props.addTodo();
      }}>追加</button>
      
      <ul>
        {console.log(props.todos)}
        {props.todos.map((todo, index) => {
          <li key={index}>{todo.text} <button>削除</button></li>
        })}
      </ul>
    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  todos: state.addDel.todos
})
const mapDispatchToProps = dispatch => ({
  addTodo: () => dispatch(addTodo())
  //delTodo: () => dispatch(delTodo())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
