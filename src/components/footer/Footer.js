import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo_EasyJob.png";
import FacebookIcon from "@mui/icons-material/Facebook";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
const Footer = () => {
  const linkButtonStyles = {
    color: "#000",
    textDecoration: "none",
    fontSize: "15px",
  };
  return (
    <footer>
      <div id="Contactus" className="footer-container">
        {/* About Us Section */}
        <div className="footer-column">
          <img src={logo} alt="Company Logo" className="footer-logo" />
          <p>
            "Share your IDEA and We Will Make It Real.” We ensure the true worth
            of the valuable time and money you invested in us by delivering the
            perfect product.
          </p>
          <div className="social-links">
            <Link to="#" style={linkButtonStyles} >
              <FacebookIcon />
            </Link>
            {/* <Link to="#" style={linkButtonStyles}>
              <LinkedInIcon />
            </Link> */}
            <Link to="#"style={linkButtonStyles}>
              <InstagramIcon />
            </Link>
          </div>
        </div>

        {/* Important Links Section */}
        <div className="footer-column">
          <h3>Important Links</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>
              <a href="#">Innovative AI Solutions</a>
            </li>
            <li>
              <a href="#">Application Development</a>
            </li>
            <li>
              <a href="#">Web Development</a>
            </li>
            <li>
              <a href="#">Digital Marketing</a>
            </li>
            <li>
              <a href="#">UI/UX Design</a>
            </li>
            <li>
              <a href="#">Recruitment Solutions</a>
            </li>
          </ul>
        </div>

        {/* Get in Touch Section */}
        <div className="footer-column">
          <h3>Get in Touch</h3>
          <a href="#" className="contact-link">
            <LocationOnIcon />
            Chandigarh Group of College, Landran Mohali Punjab
          </a>
          <a href="#" className="contact-link">
            <EmailIcon /> info@dortexai.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
