import React, { useState } from 'react';
import Categories from '../components/categories/Categories';
import Schedule from '../components/schedule/Schedule';
import TodoList from '../components/todo/TodoList';
import TodoForm from '../components/todo/TodoForm';
import TodoHeader from '../components/todo/TodoItem';

function Home() {
  const [categories, setCategories] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [todos, setTodos] = useState([]);

  const handleAddSchedule = (newSchedule) => {
    setSchedule([...schedule, newSchedule]);
  };

  const handleDeleteSchedule = (scheduleId) => {
    setSchedule(schedule.filter((item) => item.id !== scheduleId));
  };

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const handleToggleComplete = (todoId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h2>Welcome to My App</h2>
      <div className="home-content">
        <div className="home-sidebar">
          <Categories categories={categories} setCategories={setCategories} />
        </div>
        <div className="home-main-content">
          <TodoHeader count={todos.length} />
          <Schedule
            schedule={schedule}
            onDeleteSchedule={handleDeleteSchedule}
            onAddSchedule={handleAddSchedule}
          />
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleComplete={handleToggleComplete}
          />
          <TodoForm handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
}

export default Home;
// a