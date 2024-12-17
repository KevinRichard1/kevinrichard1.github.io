import React, {useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import './CSS/Project.css'
import hackclt24 from '../Components/Assets/hackclt24.jpg'
import scoutmini from '../Components/Assets/scoutmini.png'

const Project = () => {
  const ref = useRef(null);

  useEffect(() => {
    const scrollToSection = () => {
      const hash = window.location.hash;
      if (hash === '#hackclt' && ref.current) {
        const element = ref.current;
        
        const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
        
        const offset = 100;

        window.scrollTo({
          top: elementTop - offset,
          behavior: 'smooth',
        });
      }
      if (hash === '#deliveryrobot' && ref.current) {
        const element = ref.current;
        
        const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
        
        const offset = 100;

        window.scrollTo({
          top: elementTop - offset,
          behavior: 'smooth',
        });
      }
    };

    scrollToSection();

    window.addEventListener('hashchange', scrollToSection);

    return () => {
      window.removeEventListener('hashchange', scrollToSection);
    };
  }, []); 


  return (
    <div className='projects'> 
        <h1>Projects</h1>
        <div id="hackclt" className='hackclt' ref={ref}>
          <div className="hackclt-text">
            <Link to="https://github.com/TheBraveChicken4/EarningsReaderHackCLT" className='projects-links'>Earnings Call Analysis 🔗</Link>
            <ul>
              <li>Won 1st place at Hack CLT 24, showcasing innovation in real-time financial data analysis.</li>
              <li>Developed a responsive earnings call analysis web app using React and Node.js/Express.</li>
              <li>Automated API interactions with Python scripts, reducing API call frequency by 96.7% and significantly improving cost efficiency.</li>
            </ul>
          </div>
          <img src={hackclt24} alt="" />
        </div>
        <hr />
        <div className="deliveryrobot" id="deliveryrobot" ref={ref}>
          <div className="deliveryrobot-text">
            <Link to="https://github.com/KevinRichard1/scout-sim" className='projects-links'>Autonomous Delivery Robot 🔗</Link>
            <ul>
              <li>Collaborated with the Charlotte AI Research club on the development of an autonomous delivery robot, integrating SLAM for precise navigation and environmental mapping using Nav2, Google Cartographer, and GazeboSim.</li>
              <li>Oversaw migration of AgileX Scout Mini codebase for ROS2 compatability.</li>
              <li>Implemented YOLOv8-based object detection for collision avoidance and dynamic path planning.</li>
            </ul>
          </div>
          <img src={scoutmini} alt="" />
        </div>
        <hr />
    </div>
  )
}

export default Project