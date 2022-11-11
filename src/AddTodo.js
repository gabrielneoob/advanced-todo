import React, { useEffect, useRef, useState } from 'react'

const AddTodo = ({ setTodo, todo }) => {
  const [inputTodo, setInputTodo] = useState('');
  const randomId = Math.floor(Math.random() * 90000)
  const inputText = useRef()

  useEffect(() => {
    console.log(todo);
  }, [todo])

  function handleChangeInput() {
    setInputTodo(inputText.current.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputTodo) {
      setTodo([...todo, { id: randomId, content: inputTodo, completed: false }])
    }
    setInputTodo('')
  }

  return (
    <form className='add-component' onSubmit={handleSubmit}>
      <label htmlFor='add-todo'>Adicione sua tarefa</label>
      <div>
        <input type='text' id='add-todo' onChange={handleChangeInput} ref={inputText} value={inputTodo} placeholder='O que você vai fazer?' />
        <button className='add-btn'>+</button>
      </div>
    </form>
  )
}

export default AddTodo