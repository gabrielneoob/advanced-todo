import React, { useEffect } from 'react'
import Todo from './Todo'

const TodoList = ({ todo, setTodo, currentSelect, unfinishedTodo, finishedTodo }) => {
  const todoValue = currentSelect === 'finished' ? finishedTodo : currentSelect === 'todo' ? unfinishedTodo : todo;

  useEffect(() => {
    console.log(unfinishedTodo);
    console.log(finishedTodo);
    console.log('todovalue', todoValue);
  }, [currentSelect])
  return (
    <div>
      {todoValue.map((currentTodo) => <Todo currentTodo={currentTodo} key={currentTodo.id} todo={todo} setTodo={setTodo} />)}
    </div>
  )
}

export default TodoList