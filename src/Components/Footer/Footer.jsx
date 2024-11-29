import React from 'react'
import './Footer.css'
import img1 from '../Assets/logo_big.png'
import insta from '../Assets/instagram_icon.png'
import pintester from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={img1} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img src={insta} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={pintester} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={whatsapp} alt="" />
            </div>
        </div>
        <div className="copyright">
                <hr />
                <p>Copyright @2024 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer