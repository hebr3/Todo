import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, updateTodo, removeTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          updateTodo={updateTodo}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
