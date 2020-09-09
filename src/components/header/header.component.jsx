import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({currentUser}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link to='shop'>SHOP</Link>
        </div>
        <div className='options'>
            <Link to='contact'>CONTACT</Link>
        </div>
        {
            currentUser
            ? <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
            : <Link className='option' to='signin'>SIGN IN</Link>
        }
    </div>
)

export default Header;