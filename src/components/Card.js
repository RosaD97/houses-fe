import React from 'react'
import { NavLink } from 'react-router-dom'

function Card({ img, title, price, type, id }) {
    return (
        <div className="card">
            <img src={'http://127.0.0.1:8000/storage/' + img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{price} {type}</p>
                <NavLink className='btn my_btn' to={`/dettaglio/${id}`}>Vedi</NavLink>
            </div>
        </div>
    )
}

export default Card