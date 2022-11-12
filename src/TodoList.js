import React from 'react'
import Todo from './Todo'

const TodoList = ({ todo, setTodo }) => {
  return (
    <div>
      {todo.map((currentTodo) => <Todo currentTodo={currentTodo} key={currentTodo.id} todo={todo} setTodo={setTodo} />)}
    </div>
  )
}

export default TodoList