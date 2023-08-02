import React from 'react';

const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggle}
      />
      <span>{todo.text}</span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
