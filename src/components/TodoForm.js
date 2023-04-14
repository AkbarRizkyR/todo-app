// src/components/TodoForm.js
import React from 'react';
import styles from './TodoForm.module.css';

const TodoForm = ({ input, setInput, addTodo }) => {
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form onSubmit={addTodo} className={`flex justify-center mb-5 ${styles.todoForm}`}>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        className="rounded-l-md p-4 border-t mr-0 border-b border-l border-gray-200 bg-white"
        placeholder="Add a new task..."
      />
      <button
        type="submit"
        className="px-8 rounded-r-md bg-blue-500 text-white"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
