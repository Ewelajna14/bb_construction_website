import React from 'react'
import SubHeading from './SubHeading'
import './Header.css'

import background from '../images/bg_new.jpg'

function Header() {
    return (
        <div className='app__header app__wrapper section__padding' id="home">
            <div className='app__wrapper_info'>
                <h1 className='app__header-h1'>Double B Construction</h1>
                <p className="p__opensans" style={{margin: '2rem 0', color: 'black', fontWeight: 'bold'}}>Experience quality craftsmanship and exceptional service that exceeds your expectations.</p>
                <p>Our mission is to provide high-quality remodeling and construction services that enhance your home and your lifestyle.</p>
                <button type="button" className='custom__button'>Contact Us</button>
            </div>
            <div className='app__wrapper_img'>
                <img/>
            </div>
        </div>
    )
}

export default Header