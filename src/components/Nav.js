import React from 'react'
import { Link } from 'react-router-dom'

import Logo from './Logo'
import NavLink from './NavLink'
import './Nav.css'

export default ({ handlePopupOpen }) => (
  <nav className='Nav'>
    <div className='Nav--Container container'>
      <Link to='/'>
        <Logo />
      </Link>
      <div className='Nav--LinkList'>
      <NavLink to='/portfolio/' exact>
      <span class="menu__helper">Portfolio</span>
      </NavLink>
      <NavLink to='/blog/' exact>
      <span class="menu__helper">Blog</span>
      </NavLink>
      <NavLink to='/contact/' exact>
      <span class="menu__helper">Contact</span>
      </NavLink>
      </div>
    </div>
  </nav>
)
