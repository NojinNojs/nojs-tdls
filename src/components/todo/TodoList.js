import React from 'react';
import TodoItem from './TodoItem'; // Pastikan path-nya sesuai

function TodoList({ todos }) {
  return (
    <div className="todo-list">
      <h3>Todo List</h3>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
// a