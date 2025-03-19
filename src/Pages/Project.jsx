import React, {useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import './CSS/Project.css'
import hackclt24 from '../Components/Assets/hackclt24.jpg'
import scoutmini from '../Components/Assets/scoutmini.png'

const Project = () => {
  const hackcltRef = useRef(null);
  const deliveryrobotRef = useRef(null);
  const siteblockerRef = useRef(null);

  // Effect to handle the scrolling behavior when the hash changes or the component is loaded
  useEffect(() => {
    const scrollToSection = () => {
      const hash = window.location.hash;

      let targetElement = null;

      // Determine the target section based on the current hash
      if (hash === '#hamockclt') {
        targetElement = hackcltRef.current;
      } else if (hash === '#deliveryrobot') {
        targetElement = deliveryrobotRef.current;
      } else if (hash === '#siteblocker') {
        targetElement = siteblockerRef.current;
      }

      if (targetElement) {
        // Get the position of the target element
        const elementTop = targetElement.getBoundingClientRect().top + window.pageYOffset;

        // Perform the scroll to the target position with smooth behavior
        window.scrollTo({
          top: elementTop - 100,
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
      <head>
        <title>Kevin Richard's Projects</title>
      </head>
        <h1>Projects</h1>
        <div id="hackclt" className='hackclt' ref={hackcltRef}>
          <div className="hackclt-text">
            <Link to="https://github.com/TheBraveChicken4/EarningsReaderHackCLT" className='projects-links'>Earnings Call Analysis 🔗</Link>
            <ul>
              <li>Won 1st place at Hack CLT 24, showcasing innovation in real-time financial data analysis.</li>
              <li>Developed a responsive earnings call analysis web app using React and Node.js/Express.</li>
              <li>Automated API interactions with Python scripts, reducing API call frequency by more than 95% and significantly improving cost efficiency.</li>
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
              <li>Implemented YOLO-based object detection for collision avoidance and dynamic path planning.</li>
              <li>Migrated AgileX Scout Mini codebase for ROS2 compatability.</li>
            </ul>
          </div>
          <img src={scoutmini} alt="" />
        </div>
        <hr />
        <div id="siteblocker" className='siteblocker' ref={hackcltRef}>
          <div className="siteblocker-text">
            <Link to="https://github.com/KevinRichard1/site-blocker-extension" className='projects-links'>Site Blocker Extension 🔗</Link>
            <ul>
              <li>Developed a Chrome extension to block specific websites using HTML, CSS, and JavaScript, enhancing productivity and user focus.</li>
              <li>Leveraged the Chrome Storage API to persist user preferences and settings, ensuring a personalized and seamless browsing experience.</li>
              <li>Implemented efficient event handling and DOM manipulation to dynamically block and unblock websites in real time.</li>
            </ul>
          </div>
        </div>
        <hr />
    </div>
  )
}

export default Project