import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
//import styled from 'styled-components'
import GoToVenue from '../../utils/services/go-to-venue'
import './styles.css'
// const VenueImage = ({ image, title }) => {
//   return (
//       <Image src={image} alt={title} />
//   )
// }
const VenuePage = (props) => {

  let [currentVenue , setCurrentVenue] = useState(null);
  const id = props.match.params.id;

  useEffect( () =>{
    GoToVenue.showVenue({ id }).then((venue) => {
      setCurrentVenue(venue[0]) ;
      //console.log(venue[0])
    }).catch(err => console.log(err))
  }, [id])
  //console.log(currentVenue)

  return (
    currentVenue ?
    <Fragment>
    
      <div>name :{currentVenue.name}</div>
      <div>location :{currentVenue.location}</div>
      <div>description :{currentVenue.description}</div>

      <Link to="/">Go back home</Link>
    </Fragment> :
    <div>Loading...</div>
  )

}

// const Image = styled.img`
//   width: 500px;
// `

VenuePage.defaultProps = {
    image: '',
    title: 'Placeholder',
    brand: '',
    price: 0
}

VenuePage.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    brand: PropTypes.string,
    price: PropTypes.number.isRequired
}

export default VenuePage


//<VenueImage image={image} title={title} />