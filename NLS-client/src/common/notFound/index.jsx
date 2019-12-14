import React from 'react';
import './styles.css'
import Image from '../../images/notFound.jpg';
import Link from '../../Link'

export default function NotFound() {
    return (
        <div className="notFound" style={{ backgroundImage: `url(${Image})`, backgroundPosition: 'center', "min-height": "92vh", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div>The party you are looking for is not here :(</div>
            <Link id="goToHome" to="/">Go back to homepage</Link>
        </div>
    )
}

