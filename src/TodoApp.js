import React, { useState } from 'react';
import AddTodo from './AddTodo';
import FilterSerach from './FilterSerach';
import Header from './Header';
import TodoList from './TodoList';

const TodoApp = () => {
  const [todo, setTodo] = useState([]);
  return (
    <main className='todo-container'>
      <Header color="#393235" />
      <AddTodo todo={todo} setTodo={setTodo} />
      <FilterSerach />
      <TodoList todo={todo} />
    </main>
  )
}

export default TodoApp