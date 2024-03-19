import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='section section-header py-3'>
      <div className='container header d-flex justify-content-between align-items-center'>
        <NavLink className="titolo text-light text-decoration-none" to={'/'}>CampusHome</NavLink>
        <NavLink className="titolo text-light text-decoration-none" to={'/about'}>About</NavLink>
      </div>
    </div>
  )
}

export default Header