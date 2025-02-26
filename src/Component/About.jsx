import React from 'react';
import Navigation from './Navigation';

export default function About() {
  return (
    <div id="about">
      <div id="resume">
        <div id="About-pg" >
          <center className='wow animate__animated animate__flipInX'>
            <h1>RESUME</h1>
            <h2>
              ABOUT <span>ME</span>
            </h2>
          </center>

          <br /><br /><br />

          <div id="div_1">
            <div id="info" className='wow animate__animated animate__slideInLeft'>
              <h3>PERSONAL INFOS</h3>

              <div id='text'>
                <div id="C_V">
                  <h3>First Name : <b>Komal</b></h3>
                  <h3>Age : <b>20 Years</b></h3>
                  <h3>Freelance : <b style={{ color: "rgb(91,232,91)" }}>Availabel</b></h3>
                  <h3>Phone : <b>960175380</b></h3>
                  <button className='cv_btn' onClick={() => { window.open('/Komal-Resume.pdf', '_blank') }}>DOWNLOAD CV &nbsp; <i className="fa-solid fa-arrow-right"></i></button>
                </div>
                <div id="C_V">
                  <h3>Last Name : <b>Godhaniya</b></h3>
                  <h3>Address : <b>Mavdi, Rajkot</b></h3>
                  <h3>Email : <b>komalgodhaniya1@gmail.com</b></h3>
                  <h3>Language : <b>Gujrati, Hindi, English</b></h3>
                </div>
              </div>

            </div>
            <div id="count" className='wow animate__animated  animate__slideInRight'>
              <div className='about_box'>
                <span> 7+</span>
                <h4> - Programming language  &nbsp;&nbsp;Known</h4>
              </div>
              <div className='about_box'>
                <span> 40+</span>
                <h4> -  Completed <br /> &nbsp; projects</h4>
              </div>
              <div className='about_box'>
                <span> 10+</span>
                <h4> -  Responsive <br /> &nbsp; Projects</h4>
              </div>
              <div className='about_box'>
                <span> 6+</span>
                <h4> -  ⏱ hr Working <br /> &nbsp; Capacity</h4>
              </div>
            </div>
          </div>


          <div id="div_3">
            <center>
              <hr />
              <h3>EXPERIENCE & EDUCATION</h3>
            </center>

            <div id="education">
              <div id="detail" className='wow animate__animated animate__flipInX'>
                <button>2024-PRESENT</button> <br /> <br />
                <b>WEB DEVELOPER</b>
                <p>I am a Full-Stack Developer. I am a student at Red & White Multimedia Education and have completed my Full-Stack Developer course.</p>
              </div>
              <div id="detail" className='wow animate__animated animate__flipInX'>
                <button>2024</button> <br /> <br />
                <b>GRAPHIC DESIGN</b>
                <p>I have basic khowledge about graphic design , i design simple visiting card,magazine and templates using photoshop</p>
              </div>
              <div id="detail" className='wow animate__animated animate__flipInX'>
                <button>2023-2026</button> <br /> <br />
                <b>B.C.A (RUNNING)</b>
                <p>I'm third semester student of BCA in SPS college at Jasdan</p>
              </div>
              <div id="detail" className='wow animate__animated animate__flipInX'>
                <button>2010-2022</button> <br /> <br />
                <b>SSC - HSC</b>
                <p>I complete my SSC and HSC study from panchshil school rajkot</p>
              </div>
            </div>
          </div>
        </div>

        <Navigation />
      </div>
    </div>
  );
}

