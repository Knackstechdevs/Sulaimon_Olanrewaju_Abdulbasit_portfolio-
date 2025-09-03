import React from 'react'
import './Footer.css'
import Logo from '../../assets/Logo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={Logo} alt="" />
                <p>I am a frontend developer from Lagos with 5 years of experience in multiple companies like Wix, Shopify and Mailchimp.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <p>~~~</p>
                    <input type="email"  placeholder='Input your email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
             <p className="footer-bottom-left">© Knackstechdevs. All rights reserved.</p>
             <div className="footer-bottom-right">
                <p>Terms of service</p>
                <p>Privacy & policy</p>
                <p>Connect with me</p>
             </div>
        </div>
    </div>
  )
}

export default Footer