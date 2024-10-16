import React, { useState, useEffect } from 'react';
import './navbar.css'; // Assuming the styles like affix, show_list, etc., are here

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false); // State for menu toggle
  const [navbarAffix, setNavbarAffix] = useState(false); // State for scrolling effect

  // Function to handle scroll behavior
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarAffix(true);
    } else {
      setNavbarAffix(false);
    }
  };


  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
  };

  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`nav ${navbarAffix ? 'affix' : ''}`}>
        <div className="container">
          <div className="logo">
            <a href="#">Your Logo</a>
          </div>
          <div id="mainListDiv" className={`main_list ${menuActive ? 'show_list' : ''}`}>
            <ul className="navlinks">
              <li><a href="#">About</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <span className={`navTrigger ${menuActive ? 'active' : ''}`} onClick={handleMenuToggle}>
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>
      </nav>

      <section className="home">
        {/* Add home content here */}
      </section>

      {/* <div style={{ height: '1000px' }}>
        <h2 className="myH2">What is this?</h2>
        <p className="myP">This is a responsive fixed navbar animated on scroll</p>
        <p className="myP">
          I took inspiration from ABDO STEIF (<a href="https://codepen.io/abdosteif/pen/bRoyMb?editors=1100">https://codepen.io/abdosteif/pen/bRoyMb?editors=1100</a>) and Dicson 
          <a href="https://codepen.io/dicson/pen/waKPgQ">(https://codepen.io/dicson/pen/waKPgQ)</a>
        </p>
        <p className="myP">I HOPE YOU FIND THIS USEFUL</p>
        <p className="myP">Albi</p>
        <p className="myP">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque...
        </p>
      </div> */}
    </>
  );
};

export default Navbar;
