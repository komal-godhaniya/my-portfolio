import React, { useState } from 'react'
import Navigation from './Navigation'
import { auth, db } from '../../firebaseconfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

export default function Contact() {

   const[name,setName] = useState("")
   const[email,setEmail] = useState("")
   const[subject,setSub] = useState("")
   const[password,setPassword]=useState("")

   const handleSubmit = () => {
    if (!name || !email || !password || !subject) {
      alert("Please fill in all details.");
      return;
    }
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((data) => {
        setDoc(doc(db, "users", data.user.uid), {
          name,
          email,
          password,
          subject,
        })
        console.log("ADDED")
  
        setName("")
        setPassword("")
        setEmail("")
        setSub("")
  
        alert("Thanks for Contacting me 🎀")
      })
  }
  return (
    <div id='about'>
      <div id="resume">
        <div id="Contact">
          <center className='wow animate__animated animate__flipInX'>
            <h1 style={{ letterSpacing: "12px" }}>CONATCT</h1>
            <h2>
              GET IN <span>TOUCH</span>
            </h2>
          </center>

          <br /><br /><br />

          <div id="main">
            <div id="text" className='wow animate__animated animate__bounceIn'>
              <br /><br />
              <h3>DON'T BE SHY !</h3>
              <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>

              <div id='shy'>
                <div className='shy_div-1'>
                  <div id='shy_logo'>
                    <i class="fa-solid fa-location-dot"></i>
                  </div>
                  <div id='shy_text'>
                    <h4>ADDRESS POINT</h4>
                    <h4 style={{ fontWeight: "300", marginTop: "8px", lineHeight: "1.5" }}>Umiya Chowk,Rajkot</h4>
                  </div>
                </div>
                <br />
                <div className='shy_div-1'>
                  <div id='shy_logo'>
                    <i class="fa-solid fa-envelope"></i>
                  </div>
                  <div id='shy_text'>
                    <h4>MAIL ME</h4>
                    <h4 style={{ fontWeight: "300", marginTop: "8px", lineHeight: "1.5" }}>komalgodhaniya20@gmail.com</h4>
                  </div>
                </div>
                <br />
                <div className='shy_div-1'>
                  <div id='shy_logo'>
                    <i class="fa-solid fa-phone"></i>
                  </div>
                  <div id='shy_text'>
                    <h4>CALL ME</h4>
                    <h4 style={{ fontWeight: "300", marginTop: "8px", lineHeight: "1.5" }}>+9601775380</h4>
                  </div>
                </div>
              </div>
            </div>
            <div id="form">
              <div>
                <input type="name" id='in_1' placeholder='YOUR NAME'value={name} onChange={(e) => setName(e.target.value)}  className='wow animate__animated animate__pulse'/>
                <input type="email" id='in_1' placeholder='YOUR EMAIL' value={email} onChange={(e) => setEmail(e.target.value)} className='wow animate__animated animate__pulse'/>
              </div> <br />
              <input type="password" placeholder='YOUR PASSWORD' value={password} onChange={(e) => setPassword(e.target.value)} className='wow animate__animated animate__pulse'/>
              <input type="name" placeholder='YOUR SUBJECT' value={subject} onChange={(e) => setSub(e.target.value)} className='wow animate__animated animate__pulse'/>

              <textarea name="" id="" className='wow animate__animated animate__pulse'></textarea>

              <button onClick={handleSubmit} className='wow animate__animated animate__headShake ' >SEND MESSAGE</button>
            </div>
          </div>

        </div>
        <Navigation />
      </div>

    </div>

  )
}
