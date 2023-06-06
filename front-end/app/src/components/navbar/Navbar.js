import React from 'react'
import './Navbar.css'
import { Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <div className='navbar'>

        <div className='logo'><Link to="/" className='link'> CodingHub</Link></div>
        <ul className='menu'>
            <li><Link to="/" className='link'>home</Link></li>
            <li><Link to="/create" className='link'>applycourse</Link></li>
        </ul>

      </div>
        


    </nav>
    
  )
}
