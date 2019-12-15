import React from 'react'
import './styles.css'
import Image from '../../images/background4.jpg';
import ContentLoader from '../content-loader'
import AddToFavourites from '../../utils/services/add-to-favourites'
import GoToVenue from '../../utils/services/go-to-venue'
import { useHistory } from 'react-router-dom';
import IFrameGenerator from '../i-frame-generator'
import { getSession } from '../../utils/get-session'
import Popup from "reactjs-popup";

export default function PluginGenerator({ fbUrl }) {
    const id = getSession();
    const history = useHistory();

    const handleAddToFavourites = () => {

        AddToFavourites.updateFavourites({ fbUrl }).catch(err => console.log(err))
    }
    const handleGoToVenue = () => {

        GoToVenue.goVenue({ fbUrl }).then((venue) => {
            //console.log(fbUrl);
            let id = venue[0]._id;

            history.push(`/venues/${id}`);
        }).catch(err => (err))
    }
    const contentStyle = {
        background: "rgba(255,255,255,0)",
        width: "0%",
        border: "none",
        height: "0px",
        color: "white",
    };

    return (

        <div className="wrapper" style={{ backgroundImage: `url(${Image})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            {id ? <Popup
                
                arrow={false}                                                              
                offsetY={15}
                offsetX={27}
                contentStyle={contentStyle}
                trigger={ <div className="add-button">
                            <button onClick={handleAddToFavourites}>Add to Favourites</button>
                            </div> }
                position="top left">
                <div>Added!</div>
                </Popup>: <div></div>}

            <div className="add-button" id="goToVenue">
                <button onClick={handleGoToVenue}>Go to venue</button>
            </div>
            <IFrameGenerator fbUrl={fbUrl} />

            <ContentLoader />
        </div>

    );
}


//style={{display: "none"}}
// <div className="fb-page" data-href={fbUrl}
// data-tabs="events" data-width="500" data-height="700" data-small-header="false"
// data-adapt-container-width="true" data-hide-cover="false"
// data-show-facepile="true"><blockquote cite={fbUrl}
//     className="fb-xfbml-parse-ignore"><a href={fbUrl}>.</a></blockquote>
// </div>

// <Popup
                
// arrow={false}                                                              
// offsetY={15}
// contentStyle={contentStyle}
// trigger={<button onClick={handleAddToFavourites}>Add to Favourites</button>}
// position="top center">
// <div>Added!</div>
// </Popup>

// <div className="add-button">
//             <button onClick={handleAddToFavourites}>Add to Favourites</button>
//             </div> 