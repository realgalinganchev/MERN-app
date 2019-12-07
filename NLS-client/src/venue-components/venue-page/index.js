import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import VenueData from '../venue-data'
import PluginGenerator from '../../utils/plugin-generator'
import VenueCaroussel from '../venue-caroussel/'

// useEffect hook of venue
const VenuePage = (props) => {

  let venue = VenueData.filter(item => {
    return item.id === props.match.params.id
  })[0]

  return (
    <Fragment>
        
        <VenueCaroussel><PluginGenerator fbUrl={venue.fbUrl} title={venue.title}/></VenueCaroussel>
      <div>{venue.brand} {venue.title}</div>
      <div>{venue.price}</div>
      <Link to="/">Go back to homepage</Link>
    </Fragment>

  )
}
export default VenuePage