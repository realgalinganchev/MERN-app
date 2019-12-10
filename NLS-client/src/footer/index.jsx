import React from 'react'
//import { Link } from 'react-router-dom';
import './styles.css'
//import Link from "../Link/Link"
//import logo from '../logo.svg';

function Footer() {
    return (
        <div id="footer" className="w3-black ">
            <div className="footer-left">
                <a className="navButtonsStyle" href="/privacy-policy">    Privacy Policy</a>

            </div>
            <div className="footer-left">
                
                <a className="navButtonsStyle" href="/terms-and-conditions">   Terms and conditions</a>
            </div>
            <div className="footer-left">
                
            <a className="navButtonsStyle" href="/about">   About</a>
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

export default Footer  