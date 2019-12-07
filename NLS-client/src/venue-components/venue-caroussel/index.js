import React from 'react'
import Slider from "react-slick"
import VenueData from '../venue-data'
import PluginGenerator from '../../utils/plugin-generator'
import './styles.css'


const fbUrls = VenueData.map(item => item.fbUrl);
const titles = VenueData.map(item => item.title);

class VenueCaroussel extends React.Component {
  
  componentDidMount() {
    if (window.FB === undefined ){
     
      let slickListDiv = document.getElementsByClassName('slick-list')[0]
      slickListDiv.addEventListener('wheel', event => {
        
        event.preventDefault()
        event.deltaY > 0 ? this.slider.slickNext() : this.slider.slickPrev()
      })
    }else {
      window.FB.XFBML.parse()
    let slickListDiv = document.getElementsByClassName('slick-list')[0]
    slickListDiv.addEventListener('wheel', event => {
      
      event.preventDefault()
      event.deltaY > 0 ? this.slider.slickNext() : this.slider.slickPrev()
    })
    
  }
  }
  render() {
    const settings = {
      dots: false,
      variableWidth: true,
      centerMode: true,
      initialSlide: 2,
      infinite: true,
      className: "slider variable-width",
    }


    return (
      <Slider {...settings}
        ref={slider => this.slider = slider && slider['innerSlider']} >
        {fbUrls.map((fbUrl, i) => <PluginGenerator fbUrl={fbUrl} title={titles[i]} key={i} />)}
      </Slider>
    );
  }
}
export default VenueCaroussel

// export default VenueCaroussel


//    window.FB.xfbml.parse()


