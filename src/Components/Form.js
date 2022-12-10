import React from 'react'
import { useState } from 'react';
import SubHeading from './SubHeading';
import './Form.css'

export default function Form() {

  const [fname, setfName] = useState("")
  const [lname, setlName] = useState("")
  const [email, setEmail] =useState("")
  const [phone, setPhone] =useState("")
  const [message, setMessage] = useState("")


    return (
        <div className="app__bg app__wrapper section__padding" id="contact">
            <div className="app__wrapper_info">
            <SubHeading title="Contact" />
            <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Get in Touch</h1>
            <div className="app__wrapper-content">
                <form>
                  <label>First Name</label>
                  <input type="text" value={fname} onChange={(event)=>setfName(event.target.value)}></input>
                  <label>Last Name</label>
                  <input type="text" value={lname} onChange={(event)=>setlName(event.target.value)}></input><br></br>
                  <label>Email</label>
                  <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)}></input>
                  <labe>Phone</labe>
                  <input type="tel"  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={phone} onChange={(event)=>setPhone(event.target.event)}></input><br></br>
                  <labe>Message</labe>
                  <textarea value={message} onChange={(event)=>setMessage(event.target.value)}></textarea><br></br>

                  <button type="submit" className="custom__button" style={{ marginTop: '2rem' }}>SEND</button>
                </form>
        </div>
    </div>

    <div className="app__wrapper_img">
      <img></img>
    </div>
  </div>
    )
}
