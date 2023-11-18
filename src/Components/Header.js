import React from 'react'
import SubHeading from './SubHeading'
import './Header.css'

import background from '../images/bg_new.jpg'

function Header() {
    return (
        <div className='app__header app__wrapper section__padding' id="home">
            <div className='app__wrapper_info'>
                <h1 className='app__header-h1'>Double B Construction</h1>
                <p className="p__opensans" style={{margin: '2rem 0', color: 'black', fontWeight: 'bold'}}>We make your life easier</p>
                <p className='header_text'>Make your home repairs simpler and stress-free. Our experienced professionals offer a full range of services to help you upgrade, maintain, or restore your home without hassle. Enjoy the convenience and peace of mind knowing that our team has got you covered!</p>
                <button type="button" className='custom__button'>Contact Us</button>
            </div>
            <div className='app__wrapper_img'>
                <img/>
            </div>
        </div>
    )
}

export default Header