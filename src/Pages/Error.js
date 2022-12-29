import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <section className='error-page section'>
      <div className='error-container'>This is a invalid url</div>
      <Link to='/' className='btn btn-primary'>
        Back Home
      </Link>
    </section>
  )
}
