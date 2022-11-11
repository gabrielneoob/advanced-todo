import React from 'react'
import Todo from './Todo'

const TodoList = ({ todo }) => {
  return (
    <div>
      {todo.map((currentTodo) => <Todo currentTodo={currentTodo} key={currentTodo.id} />)}
    </div>
  )
}

export default TodoList