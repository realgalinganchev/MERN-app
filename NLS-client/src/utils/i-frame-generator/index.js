import React, { useState } from 'react';
import logo from '../../images/loader.gif'
import './styles.css'

const IFrameGenerator = ({ fbUrl }) => {
    const name = fbUrl.slice(25);
    const [isIframeLoaded, setIsIframeLoaded] = useState(false);

    const handleLoad = () => {
        setIsIframeLoaded(true);
    }
    return (<div>
        {!isIframeLoaded ?
            <div id="logo">
                <img src={logo} alt="loading..." />
            </div> : ''}
        <iframe title={name} onLoad={handleLoad} src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F${name}&tabs=events&width=450&height=550&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1437988429703898`} width="450" height="550" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>)
        </div>)
}
export default IFrameGenerator