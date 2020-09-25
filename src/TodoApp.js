import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import "./styles.css";

// let todos = [{id:1, content: "Walk", completed: false}, {id:2, content: "Jump", completed: true}]

// let activeFilter = 'all'

const TodoApp = () => {
  return (
    <div className="todo-app">
      <h1>Add Todo</h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </div>
  );
};

export default TodoApp;
