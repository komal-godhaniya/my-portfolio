import React from 'react'
import Navigation from './Navigation'

export default function Blog() {
  return (
    <div id='about'>
      <div id="resume">
        <div id="blog">
          <center className='wow animate__animated animate__flipInX'>
            <h1 style={{letterSpacing:"15px"}}>POSTS</h1>
            <h2>
              MY <span>BLOG</span>
            </h2>
          </center>
          <div className="blog_main_div">
            <div className="blog_parent">
              <div id="blog_child" className='wow animate__animated animate__fadeInLeft'>
                <div id="blog_img">
                  <img src="book.jpg" alt="IMG" />
                </div>
                <div id="blog_text">
                  <h5>Top 10 Toolkits for Deep Learning in 2022</h5>
                  <p>Toolkits like TensorFlow, PyTorch, and Keras made deep learning easier in 2022.</p>
                </div>
              </div>
              <div id="blog_child" className='wow animate__animated animate__fadeIn'>
              <div id="blog_img">
              <img src="coding.jpg" alt="IMG" />
              </div>
                <div id="blog_text">
                  <h5>Everything You Need to Know About Web Accessibility</h5>
                  <p>Web accessibility ensures websites are usable for everyone, including people with disabilities.</p>
                </div>
              </div>
              <div id="blog_child" className='wow animate__animated animate__fadeInRight'>
              <div id="blog_img">
              <img src="women.jpg" alt="IMG" />
              </div>
                <div id="blog_text">
                  <h5>Women in Web Design: How To Achieve Success</h5>
                  <p>The web design industry offers endless opportunities for women to showcase their creativity and technical skills.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Navigation/>
      </div>

    </div>
  )
}
