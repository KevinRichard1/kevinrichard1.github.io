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
    const options = { threshold: 0.9 };
    const observer = new IntersectionObserver(handleIntersection, options);

    const skillsElement = document.querySelector('.homepage-body-skills');
    const projectsElement = document.querySelector('.homepage-body-projects');
    const certElement = document.querySelector('.homepage-certs');

    if (skillsElement) observer.observe(skillsElement);
    if (projectsElement) observer.observe(projectsElement);
    if (certElement) observer.observe(certElement);

    return () => {
      if (skillsElement) observer.unobserve(skillsElement);
      if (projectsElement) observer.unobserve(projectsElement);
      if (certElement) observer.unobserve(certElement);
    };
  }, []);

  return (
    <div className='homepage'>
      <head>
        <title>Kevin Richard's Portfolio</title>
      </head>
      <div className="homepage-title">
        <h1>Hello World!</h1>
        <h1>👋</h1>
      </div>
      <div className='homepage-intro'>
        <img src={profile} alt="" />
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
      </div>
      <div className="homepage-links">
        <Link to="https://github.com/kevinRichard1/">
          <img src={githubIcon} alt=""/>
        </Link>
        <Link to="https://www.linkedin.com/in/kevin-richard-0b509928a/">
          <img src={linkedinIcon} alt=""/>
        </Link>
      </div>
      <hr />
      <div className='homepage-body'>
        <h2>SKILLS</h2>
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
            <li>Oracle Cloud Infrastructure 2024 Certified AI Foundations Associate</li>
          </ul>
        </div>
        <hr />
        <h2>PROJECTS</h2>
        <div className="homepage-body-projects">
          <p>Project 1</p>
          <p>Project 2</p>
          <p>Project 3</p>
        </div>
      </div>
    </div>
  )
}

export default Homepage