import { VISIBILITY_FILTERS } from "../constants";

export const getTodoState = (store) => store.todos;

export const getTodoList = (store) =>
  store && store.todos ? store.todos.allIds : [];

export const getTodoByIds = (store, id) =>
  store && store.todos && store.todos.byIds
    ? { ...store.todos.byIds[id], id }
    : {};

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */

export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
  const allTodos = getTodos(store);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter((todo) => todo.completed);
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTodos.filter((todo) => !todo.completed);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos;
  }
};

export const getTodos = (store) =>
  getTodoList(store).map((id) => getTodoByIds(store, id));
