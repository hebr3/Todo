import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <form name="addForm" onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          className="form-control"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
