import React from 'react';
import {scaleDown as Menu} from 'react-burger-menu';
import {Link} from "react-router-dom"
import './Navbar.css';
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';

function Navbar(props){
  return (
      <Menu>
        <a className='menu-item'>
          <h1>WESLEY WONG</h1>
        </a>
        <a className='menu-item' href='/Home'>
          Home
        </a>
        <a className='menu-item' href='/AboutMe'>
          About Me
        </a>
        <a className='menu-item' href='/Resume'>
          Resume
        </a>
        <a className='menu-item' href='/Contact'>
          Contact
        </a>
      </Menu>
  );
};
export default Navbar;