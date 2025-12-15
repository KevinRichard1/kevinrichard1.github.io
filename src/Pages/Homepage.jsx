import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import './CSS/Homepage.css'
import profile from '../Components/Assets/profile.jpg'
import pythonIcon from '../Components/Assets/python-icon.png'
import javaIcon from '../Components/Assets/java-icon.png'
import javascriptIcon from '../Components/Assets/javascript-icon.png'
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
        <img src={profile} alt="Kevin Richard - Computer Science Student" />
          <p>
          Hi! I’m Kevin Richard, a student at the University of North Carolina at Charlotte studying Computer Science, with a passion for machine learning and software development. I’ve worked on projects in a variety of fields where I’ve combined creativity and technical skills to solve real-world challenges.
          </p>
      </div>
      <div className="homepage-links">
        <Link to="https://github.com/kevinRichard1/" aria-label="GitHub Profile">
          <img src={githubIcon} alt="GitHub"/>
        </Link>
        <Link to="https://www.linkedin.com/in/kevin-richard-cs/" aria-label="LinkedIn Profile">
          <img src={linkedinIcon} alt="LinkedIn"/>
        </Link>
      </div>
      <hr />
      <div className='homepage-body'>
        <h2>Skills</h2>
        <div className='homepage-body-skills'>
          <div className="skill-item">
            <img src={pythonIcon} alt="Python" />
            <p>Python</p>
          </div>
          <div className="skill-item">
            <img src={javascriptIcon} alt="JavaScript" />
            <p>JavaScript</p>
          </div>
          <div className="skill-item">
            <img src={javaIcon} alt="Java" />
            <p>Java</p>
          </div>
        </div>
        <div className="homepage-certs">
          <h3>Certifications:</h3>
          <ul>
            <li>AWS Certified Machine Learning Engineer - Associate</li>
            <li>AWS Certified Developer - Associate</li>
            <li>AWS Certified Solutions Architect - Associate</li>
            <li>AWS Certified AI Practitioner</li>
            <li>AWS Certified Cloud Practitioner</li>
          </ul>
        </div>
        <hr />
        <h2>Projects</h2>
        <div className="homepage-body-projects">
          <div className="homepage-body-projects-text">
            <HashLink smooth to="/projects#reviewanalysis" className='projects-links'>Product Review Analysis: </HashLink>
            <p>Machine learning solution for product review analysis.</p>
          </div>
          <div className="homepage-body-projects-text">
            <HashLink smooth to="/projects#raise" className='projects-links'>AI-Powered Grant Applications: </HashLink>
            <p>RAISE is an AI powered grant matching and auto application platform that helps student organizations and nonprofits secure funding instantly.</p>
          </div>
          <div className="homepage-body-projects-text">
            <HashLink smooth to="/projects#hackclt" className='projects-links'>Earnings Call Analysis: </HashLink>
            <p>A web application for real-time sentiment analysis during an Earnings Call.</p>
          </div>
          <div className="homepage-body-projects-text">
            <HashLink smooth to="/projects#deliveryrobot" className='projects-links'>Autonomous Delivery Robot: </HashLink>
            <p>An autonomous delivery robot built in collaboration with UNC Charlotte's AI Research Club.</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default Homepage