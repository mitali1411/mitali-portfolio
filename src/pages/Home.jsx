import React from 'react'
import image from '../assets/girl1.png'


const Home = () => {
  return (
<div className='home-content d-flex align-items-center justify-content-center'>
        <div className="left1">
          <h3>Hello, It's Me</h3>
          <h1>Mitali Rasaniya</h1>
          <h3 className='text-animation'>And I'm a <span></span></h3>
          <p>I'm a MERN stack developer who loves turning ideas into real websites. I use MongoDB, Express.js, React, and Node.js to build awesome web apps. I enjoy creating things that look good and work smoothly. Let's build something cool together!</p>

      <span>
      <a href="https://github.com/mitali1411" target='_blank'><i className='bx bxl-github'></i></a>
      <a href="https://www.linkedin.com/in/mitali-rasaniya-436968230/" target='_blank'><i className='bx bxl-linkedin'></i></a>
      <a href="skype:live:.cid.1407a665c1119355"><i className='bx bxl-skype'></i></a>
      <a href="mailto:mitalirasaniya14@gmail.com" target='_blank'><i className='bx bxl-gmail'></i></a>
      </span>
    
        <a href="#about" className='btn-box'>More About Me</a>
      
        </div>

        <div className="right1">
        <img src={image} alt="" />
      </div>
      </div>
    
  )
}

export default Home