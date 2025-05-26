import './About.css';
import aboutImg from './assets/profile.jpg';
import Contact from './Contact';
import Project from './Project';
import Home1 from './Home1';
const About = () => {
  return (
    
    <div className="about">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImg} alt="About me" />
        </div>
        <div className="about-text">
        <div className="hero-content">
        <h1 className="title">Hi, I'm <span className="highlight">SOLANKI URMILA</span></h1>
        <h2 className="subtitle">A Mern Stack Developer</h2>
       
        </div>
        
          <p>
            I'm a passionate mern stack  developer with a love for creating beautiful,
            responsive, and user-friendly websites and  web-applications. I enjoy transforming
            ideas into real-world projects using clean, efficient code.
          </p>
          <p>
            My tech stack includes  <strong>JavaScript</strong>,<strong>React.js</strong>,<strong>Express.js</strong>,
            <strong>Node.js</strong>,<strong>Mongodb</strong>, and
            <strong> Git</strong>. I constantly strive to learn and grow as a developer, staying
            up-to-date with the latest web technologies.
          </p>
          <a href="https://www.linkedin.com/in/urmila-solanki208/" className="btn">Let's Connect</a>
      </div>
      </div>
   
    </div>
     
  )
}

export default About
