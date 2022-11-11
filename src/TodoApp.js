import React from 'react';
import AddTodo from './AddTodo';
import FilterSerach from './FilterSerach';
import Header from './Header';

const TodoApp = () => {
  return (
    <main className='todo-container'>
      <Header color="#393235" />
      <AddTodo />
      <FilterSerach />
    </main>
  )
}

export default TodoApp