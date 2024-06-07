import React, { useEffect, useState } from "react";

import TodoList from "./TodoList.jsx";
import TodoForm from "./TodoForm.jsx";

const App = () => {
  const [todos, setTodos] = useState([]);

  // Load todos from localStorage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  // Save todos to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const updateTodo = (index, newTodo) => {
    const newTodos = [...todos];
    newTodos[index] = newTodo;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} removeTodo={removeTodo} />
    </div>
  );
};

export default App;
