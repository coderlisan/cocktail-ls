import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <h4 className='section_title'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About Us</Link>
        </h4>
      </div>
    </nav>
  )
}
