import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import VenueLocationGenerator from '../../utils/venue-location-generator'
//import styled from 'styled-components'
import GoToVenue from '../../utils/services/go-to-venue'
import './styles.css'

// const Image = styled.img`
//   width: 600px;

// `
//<Image id="first" src={currentVenue.img} alt={currentVenue.name} />   
const VenuePage = (props) => {

  let [currentVenue, setCurrentVenue] = useState(null);
  const id = props.match.params.id;

  useEffect(() => {
    GoToVenue.showVenue({ id }).then((venue) => {
      setCurrentVenue(venue[0]);
    }).catch(err => console.log(err))
  }, [id])
//<p id="headerName">{currentVenue.name}</p>
  return (
    currentVenue ?
      <div style={{ backgroundImage: `url(${currentVenue.img})`, backgroundPosition: 'center', "min-height": "92vh", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div style={{ "color": "white" }}>
          
          <div id="VenueDescription">{currentVenue.description}</div>
          <div>   fdf</div>
          <div id="geo">
            <VenueLocationGenerator geoLocation={currentVenue.geoLocation} key={currentVenue.name} />
          </div>
        </div>
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

