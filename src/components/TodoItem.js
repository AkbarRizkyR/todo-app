// src/components/TodoItem.js
import React from 'react';

const TodoItem = ({ todo, index, toggleTodo, deleteTodo }) => {
  return (
    <div className="flex items-center justify-between mb-2">
      <div
        onClick={() => toggleTodo(index)}
        className={`cursor-pointer ${
          todo.completed ? 'line-through text-gray-300' : 'text-gray-800'
        }`}
      >
        {todo.text}
      </div>
      <button
        onClick={() => deleteTodo(index)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
