import React from 'react';
import CategoryItem from '../components/categories/CategoryItem';
import Categories from '../components/categories/Categories';
import Button from '../components/common/Button';
import Checkbox from '../components/common/Checkbox';
import Modal from '../components/common/Modal';
import Schedule from '../components/schedule/Schedule';
import ScheduleHeader from '../components/schedule/ScheduleHeader';
import ScheduleDay from '../components/schedule/ScheduleDay';
import ScheduleWeek from '../components/schedule/ScheduleWeek';
import ScheduleMonth from '../components/schedule/ScheduleMonth';
import SearchBar from '../components/search/SearchBar';
import FilterOptions from '../components/search/FilterOptions';
import TodoList from '../components/todo/TodoList';
import TodoItem from '../components/todo/TodoItem';
import TodoForm from '../components/todo/TodoForm';

function Home() {
  return (
    <div>
      <h2>Welcome to My App</h2>
      <div className="home-content">
        <div className="home-sidebar">
          <Categories />
          <CategoryItem />
          <SearchBar />
          <FilterOptions />
        </div>
        <div className="home-main-content">
          <Schedule/>
          <ScheduleHeader />
          <ScheduleDay />
          <ScheduleWeek />
          <ScheduleMonth />
          <TodoList />
          <TodoItem />
          <TodoForm />
          <Button />
          <Checkbox />
          <Modal />
        </div>
      </div>
    </div>
  );
}

export default Home;