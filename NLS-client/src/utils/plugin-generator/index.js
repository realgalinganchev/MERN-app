import React from 'react'
import './styles.css'
import Image from '../../images/background4.jpg';
import ContentLoader from '../content-loader'
import addToFavourites from '../../utils/services/add-to-favourites'

export default function PluginGenerator({ fbUrl, title }) {

    const handleAddToFavourites = (fbUrl) => {


    }

    return (

        <div className="wrapper" style={{ backgroundImage: `url(${Image})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <button onClick={handleAddToFavourites}>Add to favourites</button>
            <div className="fb-page" data-href={fbUrl}
                data-tabs="events" data-width="500" data-height="700" data-small-header="false"
                data-adapt-container-width="true" data-hide-cover="false"
                data-show-facepile="true"><blockquote cite={fbUrl}
                    className="fb-xfbml-parse-ignore"><a href={fbUrl}>.</a></blockquote>
            </div>

            <ContentLoader />
        </div>

    );
}

//<button id="more-details">More Details</button>
// <div>{addToFavourites.get}</div>