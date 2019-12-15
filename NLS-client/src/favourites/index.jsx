import React, { useEffect, useState } from 'react'
import { getSession } from '../utils/get-session'
import IFrameGenerator from '../utils/i-frame-generator'
import './styles.css'
import Image from '../images/disco.jpg'
const Favourites = () => {

    let [favourites, setFavourites] = useState(null);
    const id = getSession().id;

    useEffect(() => {
        fetch(`http://localhost:3001/api/user/${id}`, { credentials: "include" })
            .then(res => {
                return res.json()
            })
            .then(user => {
                setFavourites(user[0].favourites)
            });

    }, [id])
    return (
        <div className="favourites" style={{ backgroundImage: `url(${Image})`, backgroundPosition: 'center', "min-height": "92vh", backgroundSize: 'contain', backgroundRepeat: 'repeat' }}>
            {
                favourites ?
                    <div className="frame">
                        {favourites.map((fbUrl, i) => <IFrameGenerator fbUrl={fbUrl} key={i} />)}
                    </div> :
                    <div>.</div>
            }
        </div>
    )
}

export default Favourites