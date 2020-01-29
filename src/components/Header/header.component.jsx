import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {auth} from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({currentUser}) => {
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
      {currentUser?
          <p style={{cursor: 'pointer'}} className='sign-in' onClick={() => auth.signOut()}>SIGN OUT</p> : 
          <Link to='/signin' className='sign-in'><p>SIGN IN</p></Link>
        }
    </div>
    );
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);