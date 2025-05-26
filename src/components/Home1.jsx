import React from 'react'
import './Home1.css'
import Skills from './Skills'
const Home1 = () => {
  return (
   <div className="hero">
      <div className="hero-content">
       <div className="profile-container">
      <h1 className="profile-title">MERN Stack Developer Intern</h1>

      <p className="profile-text">
        <strong>Experience:</strong> 3 Months
      </p>

      <p className="profile-text">
        Enthusiastic MERN stack developer intern with hands-on experience in building full-stack web applications.
        Proficient in developing RESTful APIs using Express and Node.js, creating dynamic front-end interfaces with
        React, and managing databases with MongoDB.
      </p>
        <button className='btn'>
  <a href="/33.pdf" download className="download-btn">Download CV</a>
        </button>
   


     
    </div>
      </div>
       <Skills/>
    </div>
 




    
 

  )
}

export default Home1
