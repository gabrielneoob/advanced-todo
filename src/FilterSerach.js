import React from 'react'

const FilterSerach = () => {
  return (
    <form>
      <div className='search-component'>
        <div>
          <label htmlFor='search-input'>Pesquisar</label>
          <input type='text' placeholder='Buscar...' id='search-input' />
          <button className='trash-btn'><i class="fa-solid fa-delete-left"></i></button>
        </div>

        <div className='filter'>
          <label>Filtrar</label>
          <select>
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