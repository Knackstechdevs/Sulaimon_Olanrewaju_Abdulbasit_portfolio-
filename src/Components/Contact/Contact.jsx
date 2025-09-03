import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects, so feel free to talk about anything that you want me to work on. you can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail"><p>Knackstechdevs@gmail.com</p></div>
                    <div className="contact-detail"><p>+234 902 360 0896</p></div>
                    <div className="contact-detail"><p>Lagos, Nigeria.</p></div>
                </div>
            </div>
            <form action="https://api.web3forms.com/submit" method="POST" className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="text" placeholder='Enter your email' name='email' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button className="contact-button" type='submit'>Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact