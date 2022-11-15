import React from 'react'

const SearchedTodo = ({ item }) => {

  const todoStyle = {
    color: '#fff',
    backgroundColor: '#375067'
  }
  return (
    <div className='todo' style={item.completed ? todoStyle : null}>
      <h3>{item.content}</h3>
      <div className='todo-btns'>
        <div className='check-btn'><i className="fa-solid fa-check"></i></div>
        <div className='edit-btn'><i className="fa-solid fa-pencil"></i></div>
        <div className='delete-btn'><i className="fa-solid fa-x"></i></div>
      </div>
    </div >
  )
}

export default SearchedTodo