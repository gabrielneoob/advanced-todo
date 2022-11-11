import React from 'react';
import AddTodo from './AddTodo';
import Header from './Header';

const TodoApp = () => {
  return (
    <main className='todo-container'>
      <Header color="#393235" />
      <AddTodo />
    </main>
  )
}

export default TodoApp