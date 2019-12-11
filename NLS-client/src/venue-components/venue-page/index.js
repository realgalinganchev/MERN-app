import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import GoToVenue from '../../utils/services/go-to-venue'


const VenuePage = (props) => {

  let [currentVenue , setCurrentVenue] = useState(null);
  const id = props.match.params.id;

  useEffect( () =>{
    GoToVenue.showVenue({ id }).then((venue) => {
      setCurrentVenue(venue[0]) ;
      console.log(venue[0])
    }).catch(err => console.log(err))
  }, [id])
  console.log(currentVenue)

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
export default VenuePage


