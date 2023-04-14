// src/components/Todo.js
import React from 'react';

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  const handleCheckboxChange = () => {
    toggleComplete(todo.id);
  };

  const handleDeleteClick = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className="flex justify-between items-center bg-white p-4 my-2 rounded-md">
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleCheckboxChange}
          className="mr-4"
        />
        <span className={todo.completed ? 'line-through' : ''}>{todo.text}</span>
      </label>
      <button
        onClick={handleDeleteClick}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
