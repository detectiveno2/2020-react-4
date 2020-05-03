import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//ReactDOM.render(<App />, document.getElementById('root'));

const todos = ["todo1", "todo2", "todo3"];

const reactTodos = todos.map(todo => {
  return <li>{todo}</li>;
})

const Todos = <ul>{reactTodos}</ul>;

ReactDOM.render(Todos, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
