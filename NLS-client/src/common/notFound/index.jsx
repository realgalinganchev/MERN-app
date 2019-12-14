import React from 'react';
import './styles.css'
import Image from '../../images/notFound.jpg';
import Link from '../../Link'

function NotFound() {
    return (
        <div className="notFound" style={{ backgroundImage: `url(${Image})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>

            <p>                         .</p>
            <p>                         .</p>
            <p>                         .</p>
            <p>                         .</p>
            <p>                         .</p>
            <p>                         .</p>
            <p>                         .</p>
            <p>                         .</p>
            <p>                         .</p>
            <p>                         .</p>
            <p>                         .</p>
            <p>                         .</p>
            <p>                         .</p>
            <p>                         .</p>
            <p>                         .</p>
            <p>                         .</p>
            <p>                         .</p>
            <p>                         .</p>

            <p>                         .</p>
            <p>                         .</p>
            <p>                         .</p>

            <p>                         .</p>
            <p>.</p>
            <p>                         .</p>
            <p>                         .</p>
            <h1>                          The party you are looking for is not here :(</h1>
                    <Link id="goToHome" to="/">Go back to homepage</Link>
            <p>                         .</p>
            <p>                         .</p>
            <p>                         .</p>
            <p>                         .</p>
            <p>                         .</p>
            <p>                         .</p>
            <p>                         .</p>
            <p>                         .</p>
            <p>                         .</p>
            <p>                         .</p>


        </div>
    )
}

export default NotFound;