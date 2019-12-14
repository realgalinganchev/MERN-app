import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom';
import { getSession } from '../utils/get-session'

const Header = () => {

    return (
        <nav id="header" className="w3-center w3-black w3-xlarge">
            {
                getSession() ?
                    <ul className="list-item">
                        <Link className="navButtonsStyle" to='/'>Venues</Link>
                        <Link className="navButtonsStyle" to='/favourites'>Favourites</Link>
                        <Link className="navButtonsStyle" to='/logout'>Logout</Link>
                    </ul>
                    :
                    <ul className="list-item">
                        <Link className="navButtonsStyle" to='/'>Venues</Link>
                        <Link className="navButtonsStyle" to='/login'>Login</Link>
                    </ul>
            }
        </nav>
    )
}

export default Header

