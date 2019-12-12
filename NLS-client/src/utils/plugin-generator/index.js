import React from 'react'
import './styles.css'
import Image from '../../images/background4.jpg';
import ContentLoader from '../content-loader'
import AddToFavourites from '../../utils/services/add-to-favourites'
import GoToVenue from '../../utils/services/go-to-venue'
import { useHistory } from 'react-router-dom';
import IFrameGenerator from '../i-frame-generator'


export default function PluginGenerator({ fbUrl }) {

    const history = useHistory();
    const handleAddToFavourites = () => {

        AddToFavourites.updateFavourites({ fbUrl }).then((user) => {
            //console.log(user);
        }).catch(err => console.log(err))
    }
    const handleGoToVenue = () => {

        GoToVenue.goVenue({ fbUrl }).then((venue) => {
            //console.log(fbUrl);
            let id = venue[0]._id;

            history.push(`/venues/${id}`);
        }).catch(err => (err))
    }

    return (

        <div className="wrapper" style={{ backgroundImage: `url(${Image})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className="add-button">
                <button onClick={handleAddToFavourites}>Add to Favourites</button>
            </div>
            <div className="add-button" id="goToVenue">
                <button onClick={handleGoToVenue}>Go to venue</button>
            </div>
            <IFrameGenerator fbUrl={fbUrl} />

            <ContentLoader />
        </div>

    );
}

// <div className="fb-page" data-href={fbUrl}
// data-tabs="events" data-width="500" data-height="700" data-small-header="false"
// data-adapt-container-width="true" data-hide-cover="false"
// data-show-facepile="true"><blockquote cite={fbUrl}
//     className="fb-xfbml-parse-ignore"><a href={fbUrl}>.</a></blockquote>
// </div>