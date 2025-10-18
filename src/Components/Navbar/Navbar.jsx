import React, { useState, useRef } from 'react'
import './Navbar.css'
import Logo from '../../assets/Logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {

  const [menu,setMenu] = useState("home");

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0"
  }

    const closeMenu = () => {
    menuRef.current.style.right = "-350px"
  }

  return (
    <div className='navbar'>
        <img src={Logo} alt="" className='logo'/>
        <div onClick={openMenu} className="hamburger-menu"><span></span><span></span><span></span></div>
        <ul ref={menuRef} className="nav-menu" >
          <div onClick={closeMenu} className="hamburger-close">{'\u00d7'}</div>
            <li><AnchorLink href='#home' className='anchor-link'><p onClick={() => setMenu("home")} className={menu === 'home' ? 'active' : ''}>Home</p></AnchorLink></li>
            <li><AnchorLink href='#about'className='anchor-link' offset='50'><p onClick={() => setMenu("about")} className={menu === 'about' ? 'active' : ''}>About</p></AnchorLink></li>
            <li><AnchorLink href='#services'className='anchor-link' offset='50'><p onClick={() => setMenu("services")} className={menu === 'services' ? 'active' : ''}>Services</p></AnchorLink></li>
            <li><AnchorLink href='#projects'className='anchor-link' offset='50'><p onClick={() => setMenu('projects')} className={menu === 'projects' ? 'active' : ''}>Projects</p></AnchorLink></li>
        </ul>
        <div onClick={() => setMenu('contact')} className="nav-connect"><AnchorLink href='#contact'className='anchor-link'>Let's talk</AnchorLink></div>
    </div>
  ) 
}

export default Navbar