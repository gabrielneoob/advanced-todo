import React, { useEffect } from 'react'

const Todo = ({ currentTodo, todo, setTodo }) => {

  const todoStyle = {
    color: '#fff',
    backgroundColor: '#375067'
  }

  useEffect(() => {
    console.log(currentTodo);
  }, [todo])

  function handleCheck() {
    const newTodos = [...todo];
    const todo2 = newTodos.find((todo) => todo.id === currentTodo.id);
    todo2.completed = !todo2.completed;
    return setTodo(newTodos);
  }
  return (
    <div className='todo' style={currentTodo.completed ? todoStyle : null}>
      <h3>{currentTodo.content}</h3>
      <div className='todo-btns'>
        <div className='check-btn' onClick={handleCheck}><i className="fa-solid fa-check"></i></div>
        <div className='edit-btn'><i className="fa-solid fa-pencil"></i></div>
        <div className='delete-btn'><i className="fa-solid fa-x"></i></div>
      </div>
    </div >
  )
}

export default Todo