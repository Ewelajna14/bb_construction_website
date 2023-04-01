import React from 'react';
import './Services.css';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import {MdOutlineConstruction} from 'react-icons/md';
import SubHeading from './SubHeading';

import basement from '../images/basement.jpg'
import baathroom from '../images/bathroom_1.jpeg'
import living_room from '../images/living_room.jpg'
import kitchen from '../images/kitchen.jpg'


export default function Services() {

const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
    return (
        <div className="app__gallery flex__center" id="services">
        <div className="app__gallery-content">
          <SubHeading title="BB Construction" />
          <h1 className="headtext__cormorant">Services</h1>
          <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
          <button type="button" className="custom__button">View More</button>
        </div>
        <div className="app__gallery-images">
          <div className="app__gallery-images_container" ref={scrollRef}>
            {[basement, baathroom, living_room, kitchen].map((image, index) => (
              <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
                <img src={image} alt="gallery_image" />
                <MdOutlineConstruction className="gallery__image-icon" />
              </div>
            ))}
          </div>
          <div className="app__gallery-images_arrows">
            <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
            <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
          </div>
        </div>
      </div>
    )
}
