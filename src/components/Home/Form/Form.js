import React from 'react';
import './Form.css'; // Import the CSS

const Form = () => {
  return (
    <div className="recruiter-container">
      <div className="testimonial-section">
        <blockquote className="testimonial">
          <p>
            I can't thank The Hiring Company enough for their incredible Freelance Recruiter Portal. The platform is fantastic – I've had a seamless and trouble-free experience throughout the entire recruitment process. Plus, it's so easy to adapt and work with. This portal has truly enhanced my freelancing career!
          </p>
          <cite>
            <strong>Pradeep Malik</strong><br />
            Freelance Recruiter
          </cite>
        </blockquote>
      </div>
      <div className="form-section">
        <h2>
          Join Our <span>Recruiter Community</span>
        </h2>
        <p>Sign up and be a part of the World's largest Sourcing Community</p>
        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter Name" />
          </div>
          <div className="form-group">
            <label>Whatsapp Number</label>
            <input type="text" placeholder="Enter Your Whatsapp Number" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter Your Email ID" />
          </div>
          <div className="form-group">
            <label>Current Profession</label>
            <input type="text" placeholder="Enter Your Current Profession" />
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox" /> Subscribe to The Hiring Company Weekly Newsletter
            </label>
          </div>
          <button type="submit" className="submit-btn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
