import React from 'react'
import './About.css'

export default function About() {
    return (
        <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img></img>
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        {/* <h1 className="headtext__cormorant">About Us</h1> */}
        <p className="p__opensans">Do you have a home in need of a makeover? Let our experienced team take care of all necessary repairs. We offer reliable, cost-effective solutions to keep your house looking beautiful and functioning the way it should. Our professionals can tackle any job—from small fixes to full remodels—with efficiency and precision. Don’t hesitate to contact us today for expert repair services at an affordable price!</p>
        {/* <button type="button" className="custom__button">Know More</button> */}
      </div>


      {/* <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">What we do</h1>
        <p className="p__opensans">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
        <button type="button" className="custom__button">Know More</button>
      </div> */}
    </div>
  </div>
    )
}
