import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi culpa nulla quibusdam, eius sed, nisi voluptates ipsam rem commodi perferendis dignissimos magnam adipisci itaque. Sapiente, libero natus, ad nostrum dolorum rem accusamus deserunt ex doloremque fugit, ea necessitatibus  dolorum obcaecati quos placeat sunt, dignissimos necessitatibus odit dolorem illum natus illo esse sit aperiam!</p>
            <div className="footer-social-icons">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+123 456 7890</li>
              <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <div className="footer-copyright">
        Copyright 2024 &copy; Tomato.com - All Right Reserved.
      </div>
    </div>
  )
}

export default Footer