import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link']
    if (isActive) classes.push('nav-bar__link--active')
    return classes.join(' ')
  }
  return (
    <nav className='nav-bar'>
      <NavLink
        className={navLinkClass}
        to='/home'
        end
      >
        Menú principal
      </NavLink>

      <NavLink
        className={navLinkClass}
        to='/home/grabar_reunion'
        end
      >
        Grabar reunión
      </NavLink>

      <NavLink
        className={navLinkClass}
        to='/home/reunion_acta'
        end
      >
        Generar acta
      </NavLink>

      <NavLink
        className={navLinkClass}
        to='/home/calendario'
        end
      >
        Calendario
      </NavLink>

      <NavLink
        className={navLinkClass}
        to='/'
        end
      >
        Cerrar sesión
      </NavLink>

    </nav>
  )
}
 
export default NavBar
