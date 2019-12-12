import React from 'react';


const IFrameGenerator = ({ fbUrl     }) => {
    const name = fbUrl.slice(25);
 
    //console.log(name);
    return (<iframe title={name} src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F${name}&tabs=events&width=450&height=550&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1437988429703898`} width="450" height="550" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>)
}
export default IFrameGenerator