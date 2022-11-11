import React from 'react'

const Todo = ({ currentTodo }) => {
  return (
    <div className='todo'>
      <h3>{currentTodo.content}</h3>
      <div className='todo-btns'>
        <div className='check-btn'><i className="fa-solid fa-check"></i></div>
        <div className='edit-btn'><i className="fa-solid fa-pencil"></i></div>
        <div className='delete-btn'><i className="fa-solid fa-x"></i></div>
      </div>
    </div >
  )
}

export default Todo