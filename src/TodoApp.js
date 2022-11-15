import React, { useEffect, useState } from 'react';
import AddTodo from './AddTodo';
import FilterSerach from './FilterSerach';
import Header from './Header';
import SearchComponent from './SearchComponent';
import TodoList from './TodoList';

const TodoApp = () => {
  const [todo, setTodo] = useState([]);
  const [finishedTodo, setFinishedTodo] = useState([]);
  const [unfinishedTodo, setUnfinishedTodo] = useState([]);
  const [searchedTodos, setSearchedTodos] = useState([]);
  const [currentSelect, setCurrentSelect] = useState('all');
  const [searchInput, setSearchInput] = useState('');
  const LOCAL_STORAGE_KEY = 'app.todo';

  // function handleCheck(id) {
  //   const newTodos = [...todo]
  //   const todo = newTodos.find((todo) => todo.id === id);
  //   todo.completed = !todo.completed;
  //   return setTodo(newTodos);
  // }


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
      <FilterSerach setSearchedTodos={setSearchedTodos} setSearchInput={setSearchInput} searchInput={searchInput} setCurrentSelect={setCurrentSelect} currentSelect={currentSelect} setFinishedTodo={setFinishedTodo} setUnfinishedTodo={setUnfinishedTodo} todo={todo} />

      {searchInput ? <SearchComponent searchedTodos={searchedTodos} todo={todo} searchInput={searchInput} /> : <TodoList todo={todo} setTodo={setTodo} currentSelect={currentSelect} finishedTodo={finishedTodo} unfinishedTodo={unfinishedTodo} />}

    </main>
  )
}

export default TodoApp