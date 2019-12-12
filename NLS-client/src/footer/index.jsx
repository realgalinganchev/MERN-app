import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <div id="footer" className="w3-black ">
                <div className="footer-left">
                <Link  className="navButtonsStyle" to="/privacy-policy">    Privacy Policy</Link>

                </div>
                <div className="footer-left">

                    <Link className="navButtonsStyle" to="/terms-and-conditions">   Terms and conditions</Link>
                </div>
                <div className="footer-left">

                    <Link className="navButtonsStyle" to="/about">   About</Link>
                </div>
                <div id="footer-right">
                    <a className="navButtonsStyle" href="https://twitter.com/rlgalinganchev/">  <i className="fa fa-twitter"></i></a>
                    <a className="navButtonsStyle" href="https://www.instagram.com/realgalinganchev/">  <i className="fa fa-instagram"></i></a>
                    <a className="navButtonsStyle" href="https://www.facebook.com/realgalinganchev/">  <i className="fa fa-facebook-square"></i></a>
                    <a className="navButtonsStyle" href="https://github.com/realgalinganchev/">  <i className="fa fa-github"></i></a>
                    <a className="navButtonsStyle" href="https://www.linkedin.com/in/galin-ganchev-2888b1145/">  <i className="fa fa-linkedin"></i></a>
                </div>
            </div>

        )
    }
}

export default Footer  