import React from 'react';
import './ProgramHeadText.css';
import logo from '../.././../assets/images/logo_EasyJob.png'

const ProgramHeadText = () => {
  return (
    <div className="program-container">
      <div className="program-content">
        <img 
          src={logo} 
          alt="Program Icon" 
          className="program-icon" 
        />
        <div className="program-text">
          <h2>QUICK UPSKILLING PROGRAMS</h2>
          <p>Ideal for: Anyone looking to master certified skills</p>
        </div>
      </div>
      <button className="view-programs-btn">
        View all Programs
      </button>
    </div>
  );
};

export default ProgramHeadText;
