import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
    return (
        <div className="app__footer section__padding">
    
        <div className="app__footer-links">
          <div className="app__footer-links_contact">
            <h1 className="app__footer-headtext">Contact Us</h1>
            <p className="p__opensans">Chicago, USA</p>
            <p className="p__opensans">+1 212-344-1230</p>
            <p className="p__opensans">+1 212-555-1230</p>
          </div>
    
          <div className="app__footer-links_logo">
            <img></img>
            <p className="p__opensans">&quot;Number one is number one.&quot;</p>
            <img></img>
            <div className="app__footer-links_icons">
              <FiFacebook />
              <FiTwitter />
              <FiInstagram />
            </div>
          </div>
    
          <div className="app__footer-links_work">
            <h1 className="app__footer-headtext">Working Hours</h1>
            <p className="p__opensans">Monday-Friday:</p>
            <p className="p__opensans">08:00 am - 12:00 am</p>
            <p className="p__opensans">Saturday-Sunday:</p>
            <p className="p__opensans">07:00 am - 11:00 pm</p>
          </div>
        </div>
    
        <div className="footer__copyright">
          <p className="p__opensans"> &copy;{new Date().getFullYear()} BBConstruction INC| All right reserved</p>
        </div>
    
      </div>
    )
}
