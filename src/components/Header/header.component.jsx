import React from 'react';
import {Link} from 'react-router-dom';

import './header.styles.scss';

const Header = () => {
  return ( 
    <div className='header'>
      <Link to='/'><p>HOME</p></Link>
      <Link to='/general'><p>GENERAL</p></Link>
      <Link to='/entertainment'><p>ENTERTAINMENT</p></Link>
      <Link to='/business'><p>BUSINESS</p></Link>
      <Link to='/health'><p>HEALTH</p></Link>
      <Link to='/science'><p>SCIENCE</p></Link>
      <Link to='/sport'><p>SPORTS</p></Link>
      <Link to='/technology'><p>TECHNOLOGY</p></Link>
      <Link to='/signin' className='sign-in'><p>SIGN IN</p></Link>
    </div>
    );
}

export default Header;