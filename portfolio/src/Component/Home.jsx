import React, { useState } from 'react'
import Navigation from './Navigation';

export default function Section1() {

  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(!showPopup);
  }

  return (
    <div id="section-1" 
    style={
      {
        background: "url('background.jpg')",
        backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        backgroundSize: "130% 130%",
        backgroundPosition: "30% 50%",
        transform: "rotate(180deg)"
      }
    }>
      <section>
        <div id="part-1">
          <div className="home_img wow animate__animated animate__fadeInLeft">
            <img src="komalpic2.jpg" alt="" />
          </div>
        </div>
        <div id="part-2">
          <div className='wow animate__animated animate__fadeInRight'>
            <h1>
              <span>- I'M KOMAL GODHANIYA.</span>
              &nbsp; WEB DEVELOPER
            </h1>
            <p>
              I am a passionate full-stack developer currently focusing on enhancing my skills in frontend development.
              I am dedicated to building excellent websites that improve the lives of those around me.
            </p>
            <button onClick={handlePopup}>
              MORE ABOUT ME &nbsp; <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <Navigation />

        {showPopup && (
          <div className={`popup ${showPopup ? 'active' : ''}`}>
            <div className="popup-content">
              <h2>About Me</h2>
              <p>
                Hello, I’m Komal Godhaniya, a passionate full-stack developer focusing on frontend development. My journey
                in web development started with a desire to create meaningful and user-friendly digital experiences.
                I have expertise in HTML, CSS, JavaScript, React, and various other technologies that help me build
                responsive and functional websites.
              </p>
              <p>
                Beyond coding, I enjoy exploring design principles and solving problems to make the web a better place
                for everyone. My mission is to continuously grow as a developer and contribute to impactful projects.
              </p>
              <button onClick={handlePopup}>Close</button>
            </div>
          </div>)}

      </section>
    </div>
  );
}

