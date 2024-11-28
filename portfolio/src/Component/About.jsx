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
                  <h3>Phone : <b>960175***</b></h3>
                  <h3>Skype : <b>komal.godhaniya</b></h3>
                  <button className='cv_btn'onClick={() => {window.open('/komal-cv.pdf', '_blank')}}>DOWNLOAD CV &nbsp; <i className="fa-solid fa-arrow-right"></i></button>
                </div>
                <div id="C_V">
                  <h3>Last Name : <b>Godhaniya</b></h3>
                  <h3>Nationality : <b>Indian</b></h3>
                  <h3>Address : <b>Rajkot</b></h3>
                  <h3>Email : <b>komalgodhaniya20@gmail.com</b></h3>
                  <h3>Language : <b>Gujrati,Hindi,English</b></h3>
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

          <div id="div_2">
            <center>
              <hr />
              <h3>MY SKILLS</h3>
            </center>
            <div id="skills">
              <div id="ratio_1" className='wow animate__animated animate__slideInLeft'>
                <div class="circle-wrap">
                  <div class="circle">
                    <div class="mask full">
                      <div class="fill_1"></div>
                    </div>
                    <div class="mask half">
                      <div class="fill_1"></div>
                    </div>
                    <br />
                    <div class="inside-circle"> 98% </div>
                  </div>
                </div>
                <center>
                  <h4>HTML</h4>
                </center>
              </div>
              <div id="ratio_1" className='wow animate__animated animate__slideInLeft'>
                <div class="circle-wrap">
                  <div class="circle">
                    <div class="mask full">
                      <div class="fill_2"></div>
                    </div>
                    <div class="mask half">
                      <div class="fill_2"></div>
                    </div>
                    <br />
                    <div class="inside-circle"> 95% </div>
                  </div>
                </div>
                <center>
                  <h4>CSS</h4>
                </center>
              </div>
              <div id="ratio_1" className='wow animate__animated animate__slideInLeft'>
                <div class="circle-wrap">
                  <div class="circle">
                    <div class="mask full">
                      <div class="fill_3"></div>
                    </div>
                    <div class="mask half">
                      <div class="fill_3"></div>
                    </div>
                    <br />
                    <div class="inside-circle"> 55% </div>
                  </div>
                </div>
                <center>
                  <h4>DSA</h4>
                </center>
              </div>
              <div id="ratio_1" className='wow animate__animated animate__slideInLeft'>
                <div class="circle-wrap">
                  <div class="circle">
                    <div class="mask full">
                      <div class="fill_4"></div>
                    </div>
                    <div class="mask half">
                      <div class="fill_4"></div>
                    </div>
                    <br />
                    <div class="inside-circle"> 90% </div>
                  </div>
                </div>
                <center>
                  <h4>C</h4>
                </center>
              </div>
              <div id="ratio_1" className='wow animate__animated animate__slideInRight'>
                <div class="circle-wrap">
                  <div class="circle">
                    <div class="mask full">
                      <div class="fill_5"></div>
                    </div>
                    <div class="mask half">
                      <div class="fill_5"></div>
                    </div>
                    <br />
                    <div class="inside-circle"> 95% </div>
                  </div>
                </div>
                <center>
                  <h4>JAVASCRIPT</h4>
                </center>
              </div>
              <div id="ratio_1" className='wow animate__animated animate__slideInRight'>
                <div class="circle-wrap">
                  <div class="circle">
                    <div class="mask full">
                      <div class="fill_6"></div>
                    </div>
                    <div class="mask half">
                      <div class="fill_6"></div>
                    </div>
                    <br />
                    <div class="inside-circle"> 100% </div>
                  </div>
                </div>
                <center>
                  <h4>BOOTSTRAP</h4>
                </center>
              </div>
              <div id="ratio_1" className='wow animate__animated animate__slideInRight'>
                <div class="circle-wrap">
                  <div class="circle">
                    <div class="mask full">
                      <div class="fill_7"></div>
                    </div>
                    <div class="mask half">
                      <div class="fill_7"></div>
                    </div>
                    <br />
                    <div class="inside-circle"> 96% </div>
                  </div>
                </div>
                <center>
                  <h4>REACT</h4>
                </center>
              </div>
              <div id="ratio_1" className='wow animate__animated animate__slideInRight'>
                <div class="circle-wrap">
                  <div class="circle">
                    <div class="mask full">
                      <div class="fill_8"></div>
                    </div>
                    <div class="mask half">
                      <div class="fill_8"></div>
                    </div>
                    <br />
                    <div class="inside-circle"> 88% </div>
                  </div>
                </div>
                <center>
                  <h4>JQUERY</h4>
                </center>
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
                <p>I am fullstack developer and currently i'm in froentend developer i'm student in RED & WHITE multimedia Education</p>
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

