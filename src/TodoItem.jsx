import React, { useState } from "react";

const TodoItem = ({ index, todo, updateTodo, removeTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTodo, setNewTodo] = useState(todo);

  const handleEdit = () => {
    if (isEditing) {
      updateTodo(index, newTodo);
    }
    setIsEditing(!isEditing);
  };

  const handleRemove = () => {
    removeTodo(index);
  };

  return (
    <li className="list-group-item">
      <div class="input-group">
        <input
          type="text"
          className="form-control"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          aria-label="Recipient's username with two button addons"
          disabled={!isEditing}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={handleEdit}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={handleRemove}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
