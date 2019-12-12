import React, { useEffect, useState } from 'react';
import Slider from "react-slick"
import PluginGenerator from '../../utils/plugin-generator'

import './styles.css'

const VenueCaroussel = () => {
  let [fbUrls, setFbUrls] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:3001/api/venues`, { credentials: "include" })
      .then(res => res.json())
      .then(data => setFbUrls(data.map(data => data.fbUrl)));
    let slickListDiv = document.getElementsByClassName('slick-list')[0]
    slickListDiv.addEventListener('wheel', event => {

      event.preventDefault()
      event.deltaY > 0 ? VenueCaroussel.slider.slickNext() : VenueCaroussel.slider.slickPrev()
    })
  }, [])
  const settings = {
    dots: false,
    variableWidth: true,
    centerMode: true,
    initialSlide: 2,
    infinite: true,
    className: "slider variable-width",
  }
  return (
    <Slider {...settings} ref={slider => VenueCaroussel.slider = slider && slider['innerSlider']} >
      {fbUrls.map((fbUrl, i) => <PluginGenerator fbUrl={fbUrl} key={i} />)}
    </Slider>
  );

}
export default VenueCaroussel

