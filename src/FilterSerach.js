import React, { useEffect } from 'react'

const FilterSerach = ({ setCurrentSelect, currentSelect, setUnfinishedTodo, setFinishedTodo, todo, setSearchInput, searchInput }) => {

  useEffect(() => {
    // console.log(currentSelect);
    console.log(searchInput);
  }, [searchInput])

  function handleChange(e) {
    const valor = e.target.value;
    setSearchInput(valor)
  }


  function handleChangeSelect(e) {
    const val = e.target.value;

    switch (val) {
      case 'finished':
        setCurrentSelect('finished');
        const novoFinished = todo.filter((item) => item.completed)
        setFinishedTodo(novoFinished)
        break;
      case 'todo':
        setCurrentSelect('todo');
        const novoFinished2 = todo.filter((item) => !item.completed)
        setUnfinishedTodo(novoFinished2)
        break;
      default:
        setCurrentSelect('all');
        break;
    }
  }

  return (
    <form>
      <div className='search-component'>
        <div>
          <label htmlFor='search-input'>Pesquisar</label>
          <input type='text' placeholder='Buscar...' id='search-input' onChange={handleChange} value={searchInput} />
          <button className='trash-btn'><i className="fa-solid fa-delete-left"></i></button>
        </div>

        <div className='filter'>
          <label>Filtrar</label>
          <select onChange={handleChangeSelect}>
            <option value="all">todos</option>
            <option value="finished">finalizados</option>
            <option value="todo">a fazer</option>
          </select>
        </div>

      </div>
    </form >
  )
}

export default FilterSerach