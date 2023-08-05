import React from 'react';

function TodoItem({ todo }) {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={todo.completed} />
      <span>{todo.text}</span>
    </div>
  );
}

export default TodoItem;
// a