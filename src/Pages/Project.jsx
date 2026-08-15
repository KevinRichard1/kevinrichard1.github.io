import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Project.css';

const Project = () => { 

  return (
    <div className='projects'> 
      <head>
        <title>Kevin Richard's Projects</title>
      </head>
      <div className='projects-content'>
        <h1>Projects</h1>
        <div id="reviewanalysis" className='project-section reviewanalysis'>
          <div className="project-text reviewanalysis-text">
            <Link to="https://github.com/KevinRichard1/ITCS-3156-FinalProject" className='projects-links'>Product Review Analysis 🔗</Link>
            <ul>
              <li>Built an end-to-end product review analysis pipeline using logistic regression for sentiment classification and an LSTM-based model to predict numerical product ratings from review text.</li>
              <li>Implemented text preprocessing (tokenization, normalization, embeddings) and integrated both models to generate sentiment insights alongside rating predictions for each review.</li>
              <li>Evaluated and optimized model performance using cross-validation and sequence modeling techniques, enabling scalable analysis of large volumes of customer feedback.</li>
            </ul>
          </div>
          <div className="project-image">
          </div>
        </div>
        <hr />
        <div id="raise" className='project-section raise'>
          <div className="project-text raise-text">
            <Link to="https://github.com/KevinRichard1/CCIHackathon2025" className='projects-links'>AI-Powered Grant Applications 🔗</Link>
            <ul>
              <li>Developed a KNN-based, Tinder-style matching system to align applicants with relevant opportunities by measuring similarity across qualifications, interests, and historical outcomes.</li>
              <li>Built an agentic AI pipeline for automated grant application preparation and form completion, integrating retrieval-augmented generation (RAG) to produce grounded, context-aware outputs based on applicant profiles and supporting documents.</li>
              <li>Implemented a human-in-the-loop oversight framework to review, refine, and approve AI-generated content, ensuring accuracy, compliance, and responsible use in high-stakes grant submissions.</li>
            </ul>
          </div>
          <div className="project-image">
          </div>
        </div>
        <hr />
        <div id="hackclt" className='project-section hackclt'>
          <div className="project-text hackclt-text">
            <Link to="https://github.com/TheBraveChicken4/EarningsReaderHackCLT" className='projects-links'>Earnings Call Analysis 🔗</Link>
            <ul>
              <li>Won 1st place at Hack CLT 24, showcasing innovation in real-time financial data analysis.</li>
              <li>Developed a responsive earnings call analysis web app using React and Node.js/Express.</li>
              <li>Automated API interactions with Python scripts, reducing API call frequency by more than 95% and significantly improving cost efficiency.</li>
            </ul>
          </div>
          <div className="project-image">
          </div>
        </div>
        <hr />
        <div className="project-section deliveryrobot" id="deliveryrobot">
          <div className="project-text deliveryrobot-text">
            <Link to="https://github.com/KevinRichard1/scout-sim" className='projects-links'>Autonomous Delivery Robot 🔗</Link>
            <ul>
              <li>Collaborated with the Charlotte AI Research club on the development of an autonomous delivery robot, integrating SLAM for precise navigation and environmental mapping using Nav2, Google Cartographer, and GazeboSim.</li>
              <li>Implemented YOLO-based object detection for collision avoidance and dynamic path planning.</li>
              <li>Migrated AgileX Scout Mini codebase for ROS2 compatability.</li>
            </ul>
          </div>
          <div className="project-image">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project