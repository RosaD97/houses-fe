import React from 'react'
import img1 from '../img/info-1.jpg';
import img2 from '../img/info-2.jpg';

function Info() {
  return (
    <div className='info py-5 container'>
      {/* 1 parte */}
      <div className='d-flex mb-5 align-items-center'>
        <div className='img-wrapper col-5'>
          <img src={img1} />
        </div>
        <div className='col-7 p-5'>
          <h4>Appartamento vicino al campus</h4>
          <p>Questo spazioso appartamento è situato a pochi passi dal campus universitario. Dotato di tutti i comfort necessari per uno studente.</p>
        </div>
      </div>
      {/* 2 parte  */}
      <div className='d-flex flex-row-reverse align-items-center'>
        <div className='img-wrapper col-5'>
          <img src={img2} />
        </div>
        <div className='col-7 p-5'>
          <h4>Stanza singola in appartamento condiviso</h4>
          <p>Accogliente stanza singola disponibile in un appartamento condiviso con altri studenti. Ottima posizione e atmosfera accogliente.</p>
        </div>
      </div>
    </div>
  )
}

export default Info