import React, { useState } from 'react';
import logo from '../../images/loader.gif'

const VenueLocationGenerator = ({ geoLocation }) => {
    const [isIframeLoaded, setIsIframeLoaded] = useState(false);
    // console.log(geoLocation);
    const handleLoad = () => {
        setIsIframeLoaded(true);
    }
    return (<div>
        {!isIframeLoaded ?
            <div id="logo">
                <img src={logo} alt="loading..." />
            </div> : ''}
            <iframe title={"someTitle"} onLoad={handleLoad} src={geoLocation} width="600" height="450" frameBorder="0" style={{border:"0"}} allowFullScreen=""></iframe>
        
        </div>)
}
export default VenueLocationGenerator

//<iframe title={currentVenue.name} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11731.899224283019!2d23.321063!3d42.683076!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf07f33a1c892df52!2sMixtape%205!5e0!3m2!1sen!2sbg!4v1576324891427!5m2!1sen!2sbg" width="600" height="450" frameBorder="0" style={{border:"0"}} allowFullScreen=""></iframe>