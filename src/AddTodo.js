import React from 'react'

const AddTodo = () => {
  return (
    <form className='add-component'>
      <label htmlFor='add-todo'>Adicione sua tarefa</label>
      <div>
        <input type='text' id='add-todo' placeholder='O que você vai fazer?' />
        <button className='add-btn'>+</button>
      </div>
    </form>
  )
}

export default AddTodo