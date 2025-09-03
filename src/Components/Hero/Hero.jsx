import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div className='hero' id='home'>
        <img src={profile} alt="" />
        <h1><span>I'm Abdulbasit,</span> frontend developer based in Nigeria.</h1>
        <p>I am a frontend developer from Lagos with 5 years of experience in multiple companies like Wix, Shopify and Mailchimp.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink href='#contact'className='anchor-link'>Let's talk</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero