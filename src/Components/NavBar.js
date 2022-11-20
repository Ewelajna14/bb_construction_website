import React from 'react'
import { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {FaWrench} from 'react-icons/fa'
import './Navbar.css'

export default function NavBar() {

    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <h2>BB Construction</h2>
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
                    <FaWrench fontSize={27} className="overlay_close" onClick={()=>setToggleMenu(false)}/>
                    <ul className='app__navbar-smallscreen-links'>
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


