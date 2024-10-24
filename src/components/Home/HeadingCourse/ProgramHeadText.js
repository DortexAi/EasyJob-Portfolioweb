import React from 'react';
import './ProgramHeadText.css';
import logo from '../.././../assets/images/logo_EasyJob.png'
import Button from '@mui/material/Button';

const ProgramHeadText = () => {
  return (
    <div className="program-container">
      <div className="program-content">
        {/* <img 
          src={logo} 
          alt="Program Icon" 
          className="program-icon" 
        /> */}
        <div className="program-text">
          <h2>QUICK UPSKILLING PROGRAMS</h2>
          <p>Ideal for: Anyone looking to master certified skills</p>
        </div>
      </div>
      <Button variant="outlined"> View all Programs</Button>
    </div>
  );
};

export default ProgramHeadText;
