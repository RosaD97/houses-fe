import React from 'react'

function Navigazione({ onInput, text }) {

  return (
    <div className="input-group mt-5 mb-4 my-5 container">
      <input value={text} onChange={(e) => onInput(e.target.value)} type="text" className="form-control" placeholder="Cerca una casa o un alloggio" aria-label="Recipient's username" aria-describedby="basic-addon2" />
    </div>
  )
}

export default Navigazione