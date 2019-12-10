import React from 'react'
import './styles.css'
import Image from '../../images/background4.jpg';
import ContentLoader from '../content-loader'
import AddToFavourites from '../../utils/services/add-to-favourites'

export default function PluginGenerator({ fbUrl, title }) {

    const handleAddToFavourites = () => {

        AddToFavourites.updateFavourites({ fbUrl }).then((user) => {
            console.log(user);
        }).catch(err => console.log(err))
    }

    return (

        <div className="wrapper" style={{ backgroundImage: `url(${Image})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div id="add-button"><button onClick={handleAddToFavourites}>Add to favourites</button></div>
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


    // const handleAddToFavourites = (fbUrl) => {

    //     AddToFavourites.updateFavourites({fbUrl}).then((user) => {
    //         console.log(user);
    //     }).catch(err => console.log(err))

   // 
    // }