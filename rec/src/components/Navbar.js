import React from 'react';
import {NavLink} from "react-router-dom"
import {ReactBurgerMenu, slide as Menu} from 'react-burger-menu'
import './Navbar.css';

function Navbar(){
  return (
      <Menu>        
        <li>
          <NavLink to='/' className='bm-item'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/AboutMe' className='bm-item'>
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to='/Resume' className='bm-item'>
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink to='/Contact' className='bm-item'>
            Contact
          </NavLink>
        </li>
      </Menu>
  );
};
export default Navbar;