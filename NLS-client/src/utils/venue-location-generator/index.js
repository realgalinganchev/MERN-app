import React, { useState } from 'react';
import logo from '../../images/loader.gif'

const VenueLocationGenerator = ({ geoLocation }) => {
    const [isIframeLoaded, setIsIframeLoaded] = useState(false);
    const handleLoad = () => {
        setIsIframeLoaded(true);
    }
    return (<div>
        {!isIframeLoaded ?
            <div id="logo">
                <img src={logo} alt="loading..." />
            </div> : ''}
            <iframe title={"someTitle"} onLoad={handleLoad} src={geoLocation} width="500" height="200" frameBorder="0" style={{border:"0"}} allowFullScreen=""></iframe>
        
        </div>)
}
export default VenueLocationGenerator

