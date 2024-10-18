import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import logo from '../../assets/images/logo_EasyJob.png';  // Update with your logo path
import Typed from 'typed.js';
import './header.css';  

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [navbarAffix, setNavbarAffix] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarAffix(true);
    } else {
      setNavbarAffix(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

//   useEffect(() => {
//     const typed = new Typed(".text", {
//       strings: [".............."],
//       typeSpeed: 90,
//       backSpeed: 100,
//       backDelay: 1000,
//       loop: true,
//     });
//     return () => {
//       typed.destroy();
//     };
//   }, []);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className={`header ${navbarAffix ? 'affix' : ''}`}>
      <div className="logo-container">
  <a href="#home">
    <img src={logo} alt="logo" className="logo" />
    
  </a>
</div>

<i className={`bx ${menuActive ? 'bx-x' : 'bx-menu'}`} id="menu-icon" onClick={toggleMenu}></i>

<nav className={`navbar ${menuActive ? 'active' : ''}`}>
  <a href="#" className="active">Home</a>
  <a href="#">Courses</a>
  <a href="#">Hire With Us</a>
  <a href="#">Wall Of Love</a>
  <a href="#">Blog</a>
</nav>

<div className="header-buttons">
  <Button variant="contained" className="login-btn">Log In</Button>
  <Button variant="contained" className="call-btn">
    <span role="img" aria-label="phone">📞</span> Book a Call
  </Button>
</div>

    </header>
  );
};

export default Header;
