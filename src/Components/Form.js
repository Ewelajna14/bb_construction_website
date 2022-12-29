import React from 'react'
import { useState } from 'react';
import SubHeading from './SubHeading';
import './Form.css'
import {BsPenFill, BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {AiFillMessage} from 'react-icons/ai'

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
            
            <div className='contact_form_container'>
                <form>
                  <div className="row">
                    
                  <div className="input-group">
                  <input type="text" value={fname} onChange={(event)=>setfName(event.target.value)} required></input>
                  <label><BsPenFill/>First Name</label>
                  </div>
                  <div className="input-group">
                  <input type="text" value={lname} onChange={(event)=>setlName(event.target.value)} required></input>
                  <label><BsPenFill/>Last Name</label>
                  </div> 

                  </div>
                  <div className="row">
                  <div className="input-group">
                  <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} required></input>
                  <label><MdEmail/>Email</label>
                  </div>
                  <div className="input-group">
                  <input type="tel"  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={phone} onChange={(event)=>setPhone(event.target.event)} required></input>
                  <label><BsFillTelephoneFill/>Phone</label>
                  </div>
                    
                  </div>
                 
                  <div className="input-group">
                  <textarea value={message} onChange={(event)=>setMessage(event.target.value)} required></textarea>
                  <label><AiFillMessage/>Message</label>
                  </div>

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
