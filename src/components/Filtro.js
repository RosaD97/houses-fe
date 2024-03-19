import React from 'react'

function Filtro({ onType }) {
  return (
    <div className='mb-5 container'>
      <select onChange={(e) => onType(e.target.value)} className="form-select" aria-label="Default select example">
        <option value="">Filtra per tipo</option>
        <option value="appartamento">appartamento</option>
        <option value="monolocale">monolocale</option>
        <option value="singola">camera singola</option>
        <option value="doppia">camera doppia</option>
        <option value="attico">attico</option>
        <option value="villa">villa</option>
      </select>
    </div>
  )
}

export default Filtro