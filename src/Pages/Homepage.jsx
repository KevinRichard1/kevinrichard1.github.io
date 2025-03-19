import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './CSS/Homepage.css'
import profile from '../Components/Assets/profile.jpg'
import pythonIcon from '../Components/Assets/python-icon.png'
import javaIcon from '../Components/Assets/java-icon.png'
import javascriptIcon from '../Components/Assets/javascript-icon.png'
import cSharpIcon from '../Components/Assets/cSharp-icon.png'
import githubIcon from '../Components/Assets/github-icon.png'
import linkedinIcon from '../Components/Assets/linkedin.png'

const Homepage = () => {

  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  };

  useEffect(() => {
    const options = { threshold: 0.92 };
    const observer = new IntersectionObserver(handleIntersection, options);

    const skillsElement = document.querySelector('.homepage-body-skills');
    const certElement = document.querySelector('.homepage-certs');
    const projectsElement = document.querySelector('.homepage-body-projects');

    if (skillsElement) observer.observe(skillsElement);
    if (certElement) observer.observe(certElement);
    if (projectsElement) observer.observe(projectsElement);

    return () => {
      if (skillsElement) observer.unobserve(skillsElement);
      if (certElement) observer.unobserve(certElement);
      if (projectsElement) observer.unobserve(projectsElement);
    };
  }, []);


  // Scroll to top of screen
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });

  return (
    <div className='homepage'>
      <head>
        <title>Kevin Richard's Portfolio</title>
      </head>
      <div className="homepage-title">
        <h1>Hello World!</h1>
      </div>
      <div className='homepage-intro'>
        <img src={profile} alt="" />
          <p>
          Hi! I’m Kevin Richard, a student at the University of North Carolina at Charlotte studying Computer Science, with a passion for machine learning and software development. I’ve worked on projects in a variety of fields where I’ve combined creativity and technical skills to solve real-world challenges.
          </p>
      </div>
      <div className="homepage-links">
        <Link to="https://github.com/kevinRichard1/">
          <img src={githubIcon} alt=""/>
        </Link>
        <Link to="https://www.linkedin.com/in/kevin-richard-cs/">
          <img src={linkedinIcon} alt=""/>
        </Link>
      </div>
      <hr />
      <div className='homepage-body'>
        <h2>Skills</h2>
        <div className='homepage-body-skills'>
          <div className="icons">
            <img src={pythonIcon} alt="" />
            <img src={javaIcon} alt="" />
            <img src={javascriptIcon} alt="" />
            <img src={cSharpIcon} alt="" />
          </div>
          <div className="names">
            <p>Python</p>
            <p>Java</p>
            <p>JavaScript</p>
            <p>C#</p>
          </div>
        </div>
        <div className="homepage-certs">
          <h3>Certifications:</h3>
          <ul>
            <li>AWS Certified Cloud Practitioner</li>
            <li>Oracle Cloud Infrastructure 2024 Certified AI Foundations Associate</li>
          </ul>
        </div>
        <hr />
        <h2>Projects</h2>
        <div className="homepage-body-projects">
          <div className="homepage-body-projects-text">
            <Link to="/projects#hackclt" className='projects-links'>Earnings Call Analysis: </Link>
            <p>A web application for real-time sentiment analysis during an Earnings Call.</p>
          </div>
          <div className="homepage-body-projects-text">
            <Link to="/projects#deliveryrobot" className='projects-links'>Autonomous Delivery Robot: </Link>
            <p>An autonomous delivery robot built in collaboration with UNC Charlotte's AI Research Club.</p>
          </div>
          <div className="homepage-body-projects-text">
            <Link to="/projects#siteblocker" className='projects-links'>Site Blocker: </Link>
            <p>A browser extension that improves productivity by blocking distracting websites.</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default Homepage