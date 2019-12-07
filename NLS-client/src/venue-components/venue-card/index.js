import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import VenuePrice from '../venue-price'
import './styles.css'
import { Link } from 'react-router-dom'

const VenueImage = ({ image, title }) => {
    return (
        <Image src={image} alt={title} />
    )
}
class VenueCard extends Component {

    render() {
        const { image, title, brand, price, id } = this.props

        return (
            <div>
                <Link to={`/venue/${id}`}>
                    <VenueImage image={image} title={title} />
                </Link>
                <div>
                    <span>{brand}</span>
                    <span>{title}</span>
                    <span>{price}</span>
                </div>
            </div>
        )
    }
}

const Image = styled.img`
  width: 500px;
`

VenueCard.defaultProps = {
    image: '',
    title: 'Placeholder',
    brand: '',
    price: 0
}

VenueCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    brand: PropTypes.string,
    price: PropTypes.number.isRequired
}

export default VenueCard