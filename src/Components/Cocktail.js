import React from 'react'
import { Link } from 'react-router-dom'

export default function Cocktail({ img, nam, gls, id }) {
  return (
    <article className='cocktail'>
      <div className='img-container'><img src={img} alt={nam} /></div>
      <div className='cocktail-footer'>
        <h3>{nam}</h3>
        <h4>{gls}</h4>
        <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>Deatils</Link>
      </div>
    </article>
  )
}
