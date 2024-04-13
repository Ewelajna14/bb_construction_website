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


  function handlePhone(event){

    const formattedPhoneNumber = formatPhoneNumber(event.target.value)

    setPhone(formattedPhoneNumber)

  }

  function formatPhoneNumber(value){

    //return empty if nothing changed
    if (!value) return value

     // clean the input for any non-digit values.
     const phoneNumber = value.replace(/[^\d]/g, '');
     const phoneNumberLength = phoneNumber.length;
     if (phoneNumberLength < 4) return phoneNumber;
     if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;

  }

  const sendEmail =(event)=>{
    event.preventDefault()

    const mailerInfo ={
      fname,
      lname,
      email,
      phone,
      message
    }

    fetch("http://localhost:3001/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({mailerInfo}),
    })
    .then((res) => res.json())
     .then((res) => {
      if (res.status === "success") {
        alert("Message Sent");
      } else if (res.status === "fail") {
        alert("Message failed to send");
      }
     })
     .then(()=>{
      setfName("")
      setlName("")
      setEmail("")
      setPhone("")
      setMessage("")
     })

  }


    return (
        <div className="app__bg app__wrapper section__padding" id="contact">
            <div className="app__wrapper_info">
            {/* <SubHeading title="Contact" /> */}
            <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Get in Touch</h1>
            
            <div className='contact_form_container'>
                <form onSubmit={(event)=>sendEmail(event)}>
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
                  <input type="tel" value={phone} onChange={(event)=>handlePhone(event)} required></input>
                  <label><BsFillTelephoneFill/>Phone</label>
                  </div>
                    
                  </div>
                 
                  <div className="input-group">
                  <textarea rows="5" value={message} onChange={(event)=>setMessage(event.target.value)} required></textarea>
                  <label><AiFillMessage/>Message</label>
                  </div>

                  <button type="submit" className="custom__button" style={{ marginTop: '2rem' }}>SEND</button>
                </form>
         
                </div>
        
        </div>

  </div>
    )
}
