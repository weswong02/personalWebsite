import React from 'react';
import {NavLink} from "react-router-dom"
import {ReactBurgerMenu, slide as Menu} from 'react-burger-menu'
import './Navbar.css';

function Navbar(){
  return (
      <Menu>        
        <li>
          <NavLink to='/'>
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink to='/AboutMe'>
            <p>About Me</p>
          </NavLink>
        </li>
        <li>
          <NavLink to='/Resume'>
            <p>Resume</p>
          </NavLink>
        </li>
        <li>
          <NavLink to='/Contact'>
            <p>Contact</p>
          </NavLink>
        </li>
      </Menu>
  );
};
export default Navbar;