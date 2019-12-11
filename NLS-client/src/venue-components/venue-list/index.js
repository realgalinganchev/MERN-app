import React, { Fragment } from 'react'
import  './styles.css'
import VenueCard from '../venue-card/'
// import Header from '../../header'
import logged from '../../logged'
import data from '../venue-data'

const renderVenues = (venues) => {
    return venues.map(venue => {
        return (
            <Fragment key={venue.id}>
                {logged(VenueCard, venue)}
            </Fragment>
        )
    })
}

class VenueList extends React.Component {

    render() {


        return (
            <Fragment>
                <div>
                    {renderVenues(data)}
                </div>
            </Fragment>
        )
    }
}

export default VenueList



//        const { id, title, price, brand, image } = this.props