import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";

import { getTodosByVisibilityFilter } from "../redux/selectors";

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No todos, yay!"}
  </ul>
);

// const mapStateToProps = (state) => {
//   const { allIds, byIds } = state.todos || {};

//   const todos =
//     allIds && allIds.length
//       ? allIds.map((id) => (byIds ? { ...byIds[id], id } : null))
//       : null;
//   console.log(todos);
//   return { todos };
// };

// We recommend encapsulating any complex lookups or
//  computations of data in selector functions.

const mapStateToProps = (state) => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
