import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer = () =>{
  return(
    <footer>
      <div className='footer-container'>
        <div className='footer-column'>
          <h3>About Us</h3>
          <p>Recruitment Marketplace byThe Hiring Company is a unique, all-encompassing platform that revolutionizes recruitment in India.</p>
          <p>A. BHARAT FUTUREMINDS INNOVATION PRIVATE LIMITED, N-161, Saira Tower, G/F-Gautam Nagar, New Delhi, South Delhi-110049, Delhi</p>
          <p>T. +91-90350-96659</p>
          <p>E. teamhr@thehiringcompany.co.in</p>
        </div>
        <div className='footer-column'>
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">FAQ's</a></li>
          </ul>
        </div>
        <div className='footer-column'>
          <h3>Services</h3>
          <ul>
            <li><a href="#">Services</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Companies</a></li>
            <li><a href="#">Candidates</a></li>
            <li><a href="#">Freelance Recuiters</a></li>
          </ul>
        </div>
        <div className='footer-column'>
         <h3>Support</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Pricing Plan</a></li>
          </ul>
        </div>
        <div className='footer-column'>
          <h3>Connect</h3>
          <a href="#" className="social-link"><FontAwesomeIcon className="icon" icon={faLinkedin}/>LinkedIn</a>
          <a href="#" className="social-link"><FontAwesomeIcon className="icon" icon={faTwitter}/>Twitter</a>
          <a href="#" className="social-link"><FontAwesomeIcon className="icon" icon={faFacebook}/>Facebook</a>
          <a href="#" className="social-link"><FontAwesomeIcon className="icon" icon={faInstagram}/>Instagram</a>
          <a href="#" className="social-link"><FontAwesomeIcon className="icon" icon={faYoutube}/>Youtube</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
