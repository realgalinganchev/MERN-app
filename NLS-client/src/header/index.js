import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom';


function Header() {
    return (
        <nav id="header" className="w3-center w3-black w3-xlarge">
            
                <ul className="list-item">
                    <Link className="navButtonsStyle" to='/'>Venues</Link>
                    <Link className="navButtonsStyle" to='/login'>Login</Link>
                    <Link className="navButtonsStyle"to='/register'>Register</Link>
                    <Link className="navButtonsStyle" to='/about'>About</Link>
                    <Link className="navButtonsStyle" to='/favourites'>Favourites</Link>
                    <Link className="navButtonsStyle" to='/logout'>Logout</Link>
                    
            </ul>
        </nav>
    )
}

export default Header;