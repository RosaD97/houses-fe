import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='container py-5 d-flex flex-column flex-md-row gap-3'>
        <div className='col-md-6'>
          <h4>CampusHome</h4>
        </div>
        <div className='d-flex flex-column col-md-3'>
          <h4>Pagine</h4>
          <a className='text-light text-decoration-none' href='#'>About</a>
          <a className='text-light text-decoration-none' href='#'>Contattaci</a>
        </div>
        <div className='d-flex flex-column col-md-3'>
          <h4>Social</h4>
          <a className='text-light text-decoration-none' href='#'>facebook</a>
          <a className='text-light text-decoration-none' href='#'>instagram</a>
        </div>
      </div>
    </div>
  )
}
