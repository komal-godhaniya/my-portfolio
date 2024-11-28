import React from 'react';
import Navigation from './Navigation';

export default function Portfolio() {

  return (
    <div id="about">
      <div id="resume">
        <div id="portfolio">
          <center className='wow animate__animated animate__flipInX'>
            <h1 style={{ letterSpacing: '15px' }}>WORKS</h1>
            <h2>
              MY <span>PORTFOLIO</span>
            </h2>
          </center>

          <br />
          <br />
          <br />

          <div className="project_div">

            <div className="project">

              <a href="https://zento-web.vercel.app/" target='_blank' className='wow animate__animated animate__zoomIn'>
                <div className="project_img">
                  <img src="zento-web.jpeg" alt="Website" />
                  <p className='background_text'>Zento</p>
                </div>
              </a>

              <a href="https://robin-web-eta.vercel.app/" target='_blank' className='wow animate__animated animate__zoomIn'>
                <div className="project_img ">
                  <img src="robin.jpeg" alt="Website" />
                  <p className='background_text'>Robin</p>
                </div>
              </a>

              <a href="https://bluefly-web.vercel.app//" target='_blank' className='wow animate__animated animate__zoomIn'>
                <div className="project_img ">
                  <img src="bluefly.jpeg" alt="Website" />
                  <p className='background_text'>Bluefly</p>
                </div>
              </a>

              <a href="https://icecreame-web.vercel.app/" target='_blank' className='wow animate__animated animate__zoomIn'>
                <div className="project_img">
                  <img src="yummy.jpeg" alt="Website" />
                  <p className='background_text'>Icecreame</p>
                </div>
              </a>

              <a href="https://trade-web-eight.vercel.app/#header" target='_blank' className='wow animate__animated animate__zoomIn'>
                <div className="project_img ">
                  <img src="trade.jpeg" alt=" Website" />
                  <p className='background_text'>Trading</p>
                </div>
              </a>

              <a href="https://whatsapp-lyart-eta.vercel.app/" target='_blank' className='wow animate__animated animate__zoomIn'>
                <div className="project_img ">
                  <img src="whatsapp.jpeg" alt=" Website" />
                  <p className='background_text'>Whatsapp</p>
                </div>
              </a>

              <a href="https://shopmax-web.vercel.app/" target='_blank' className='wow animate__animated animate__zoomIn'>
                <div className="project_img ">
                  <img src="shopmax.jpeg" alt=" Website" />
                  <p className='background_text'>Shopmax</p>
                </div>
              </a>

              <a href="https://interiour.vercel.app/" target='_blank' className='wow animate__animated animate__zoomIn'>
                <div className="project_img ">
                  <img src="interior.jpeg" alt=" Website" />
                  <p className='background_text'>Interior</p>
                </div>
              </a>

            </div>
          </div>
        </div>
        <Navigation />
      </div>
    </div>
  );
}
