import React, { useState } from 'react';

function TodoForm({ handleAddTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      handleAddTodo({
        text,
        completed: false,
      });
      setText('');
    }
  };

  return (
    <div className="todo-form">
      <h3>Add Todo</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TodoForm;
// a