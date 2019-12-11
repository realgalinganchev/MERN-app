import React from 'react'

export default function PluginGeneratorFavourites({ fbUrl }) {


    return (

        <div className="fb-page" data-href={fbUrl}
                data-tabs="events" data-width="500" data-height="700" data-small-header="false"
                data-adapt-container-width="true" data-hide-cover="false"
                data-show-facepile="true"><blockquote cite={fbUrl}
                    className="fb-xfbml-parse-ignore"><a href={fbUrl}>Pesho</a></blockquote>
            </div>

    );
}


        //     <div className="fb-page" data-href={fbUrl}
        //     data-tabs="events" data-width="500" data-height="700" data-small-header="false"
        //     data-adapt-container-width="true" data-hide-cover="false"
        //     data-show-facepile="true"><blockquote cite={fbUrl}
        //         className="fb-xfbml-parse-ignore"><a href={fbUrl}>.</a></blockquote>
        // </div>