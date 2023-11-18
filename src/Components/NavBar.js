import React from 'react'
import { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineConstruction} from 'react-icons/md';
import './Navbar.css'

import bb_logo from '../images/bb_logo.png'
import bb_logo_big from '../images/bb_logo_big.png'
import bb_logo_black from '../images/black_logo.png.png'

export default function NavBar() {

    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <nav className='app__navbar' id="navbar">
            <div className='app__navbar-logo'>
                <img src={bb_logo_black}></img>
            </div>
            <ul className='app__navbar-links'>
                <li className='p__opensans'><a href='#home'>Home</a></li>
                <li className='p__opensans'><a href='#about'>About</a></li>
                <li className='p__opensans'><a href='#services'>Services</a></li>
                <li className='p__opensans'><a href='#contact'>Contact</a></li>
            </ul>
            <div className='app__navbar-login'>
                <a href="#log" className='p__opensans'>Sth</a>
            <div />
            <a href="/" className='p__opensans'>Quote</a>
            </div>
            <div className='app__navbar-smallscreen'>
                <GiHamburgerMenu color="white" fontSize={27} onClick={()=>setToggleMenu(true)}/>

                 {toggleMenu && (
                <div className='app__navbar-smallscreen_overlay flex_center slide-bottom'>
                    <MdOutlineConstruction fontSize={27} className="overlay__close" onClick={()=>setToggleMenu(false)}/>
                    <ul className='app__navbar-smallscreen_links'>
                        <li className='p__opensans'><a href='#home'>Home</a></li>
                        <li className='p__opensans'><a href='#about'>About</a></li>
                        <li className='p__opensans'><a href='#services'>Services</a></li>
                        <li className='p__opensans'><a href='#contact'>Contact</a></li>
                    </ul>
                </div>
                )}
            </div>
        </nav>
    )
}


