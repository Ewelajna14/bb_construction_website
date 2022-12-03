import React from 'react'
import SubHeading from './SubHeading'
import './Header.css'

import bath from '../images/bath.jpg'

function Header() {
    return (
        <div className='app__header app__wrapper section__padding' id="home">
            <div className='app__wrapper_info'>
                <SubHeading title="Reliable service"/>
                <h1 className='app__header-h1'>Hire the right Contractor</h1>
                <p className="p__opensans" style={{margin: '2rem 0'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button type="button" className='custom__button'>Contact Us</button>
            </div>
            <div className='app__wrapper_img'>
                <img src={bath}/>
            </div>
        </div>
    )
}

export default Header