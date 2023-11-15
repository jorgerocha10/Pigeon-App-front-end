import React from 'react'
import pigeonImg from '../assets/pigeon_vector.png';
import user from '../assets/user.svg';
import { NavLink } from 'react-router-dom';

const styleIcons : React.CSSProperties = {
  height: 40,
  width: 40,
  padding: 5,
}

const Navbar = () => {
  return (
    <div>
      <nav className='nav'>
        <span>
          <a href="/">
            <img style={styleIcons} src={pigeonImg} alt="" />
          </a>
        </span>
        <span>
          <a className='login' href="/">Jorge</a>
          <NavLink to='/signin'>
            <img className='user' src={user} alt='user'></img>
          </NavLink>
        </span>
        
      </nav>
    </div>
  )
}

export default Navbar 