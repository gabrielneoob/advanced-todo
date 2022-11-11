import React, { useEffect, useState } from 'react';
import AddTodo from './AddTodo';
import FilterSerach from './FilterSerach';
import Header from './Header';
import TodoList from './TodoList';

const TodoApp = () => {
  const [todo, setTodo] = useState([]);
  const LOCAL_STORAGE_KEY = 'app.todo'

  useEffect(() => {
    const storagedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
    setTodo(JSON.parse(storagedTodos));
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todo))
  }, [todo])
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