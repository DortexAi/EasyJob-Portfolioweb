import React from "react";
import './HowItWork.css'; 

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "For Employers",
      description: "Post Job Openings | Review Candidate Applications | Schedule Interviews Efficiently | Secure Your Ideal Team.",
    },
    {
      id: 2,
      title: "For Employees",
      description: "Discover Job Opportunities | Submit Your Applications | Get Hired Easily | Advance Your Career.",
    },
    {
        id: 3,
        title: "For Internship",
        description: "Find Internship Opportunities | Gain Hands-on Experience | Build Your Resume | Start Your Career Journey.",
    },
      
  ];

  return (
    <div className="how-it-works-container">
      <h2 className="section-title">How it Works</h2>
      <div className="steps-container">
        {steps.map((step) => (
          <div className="step" key={step.id}>
            <div className="step-icon">
              <span>{step.id}</span>
            </div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
