import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import VenueLocationGenerator from '../../utils/venue-location-generator'
import styled from 'styled-components'
import GoToVenue from '../../utils/services/go-to-venue'
import './styles.css'

const Image = styled.img`
  width: 600px;
`
const VenuePage = (props) => {

  let [currentVenue, setCurrentVenue] = useState(null);
  const id = props.match.params.id;

  useEffect(() => {
    GoToVenue.showVenue({ id }).then((venue) => {
      setCurrentVenue(venue[0]);
    }).catch(err => console.log(err))
  }, [id])

  return (
    currentVenue ?
      <div>
        <Image src={currentVenue.img} alt={currentVenue.name} />       
        <span><VenueLocationGenerator geoLocation={currentVenue.geoLocation} key={currentVenue.name}/></span>
        <div>name :{currentVenue.name}</div>
        <span>{currentVenue.description}</span>

        <Link to="/">Go back home</Link>
      </div>
      :
      <div>Loading...</div>
  )
}

VenuePage.defaultProps = {
  name: '',
  geoLocation: '',
  description: '',
  img: '',
}



export default VenuePage

