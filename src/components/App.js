import React, { Component } from "react";
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const App = (props) => {
    // const todolist = [
    //   { title: '概要作成', flg: false },
    //   { title: '画面設計作成', flg: false },
    //   { title: '詳細設計作成', flg: false },
    //   { title: 'コーディング', flg: false },
    //   { title: 'テスト', flg: false }]
  return (
 //propsでconnect(親）からstateの値を受け取る　受け取りたいのは配列
    <React.Fragment>
      <h1>todoリスト</h1>
      <input value={props.todos.task} />
      <button onClick={props.addTodo}>追加</button>
      <ul>
        {props.todos.map((todo, index) => (
          <li key={index}>{todo.task} <button onClick={() => props.delTodo(index)}>削除</button></li>
        ))}
      </ul>
    </React.Fragment>
  )
}

  //コンポーネントとstoreをつなぐ処理
  //mapStateToPropsコンテナ stateをpropsにいれて子へ
  const mapStateToProps = state => ({
    todos:[state.todos]
  })
  //mapDispatchToPropsコンテナ disptchを呼び出す関数をpropsにいれて子へ
  const mapDispatchToProps = dispatch => ({
    addTodo: () => dispatch(addTodo())
    //delTodo: () => dispatch(delTodo())
  })

export default connect (mapStateToProps, mapDispatchToProps)(App);
