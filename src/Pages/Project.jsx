import React, {useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import './CSS/Project.css'
import hackclt24 from '../Components/Assets/hackclt24.jpg'
import scoutmini from '../Components/Assets/scoutmini.png'

const Project = () => {
  const hackcltRef = useRef(null);
  const deliveryrobotRef = useRef(null);

  // Effect to handle the scrolling behavior when the hash changes or the component is loaded
  useEffect(() => {
    const scrollToSection = () => {
      const hash = window.location.hash;

      let targetElement = null;

      // Determine the target section based on the current hash
      if (hash === '#hackclt') {
        targetElement = hackcltRef.current;
      } else if (hash === '#deliveryrobot') {
        targetElement = deliveryrobotRef.current;
      }

      if (targetElement) {
        // Get the position of the target element
        const elementTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
        
        // Define an offset (adjust as needed)
        const offset = 100;

        // Perform the scroll to the target position with smooth behavior
        window.scrollTo({
          top: elementTop - offset,
          behavior: 'smooth',
        });
      }
    };

    // Call the function to scroll immediately after component mounts
    scrollToSection();

    // Monitor hash changes and trigger scroll when the hash changes
    window.addEventListener('hashchange', scrollToSection);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('hashchange', scrollToSection);
    };
  }, []);


  return (
    <div className='projects'> 
        <h1>Projects</h1>
        <div id="hackclt" className='hackclt' ref={hackcltRef}>
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
        <div className="deliveryrobot" id="deliveryrobot" ref={deliveryrobotRef}>
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