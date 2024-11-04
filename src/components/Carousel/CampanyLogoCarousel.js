// CompanyCarousel.js
import React from 'react';
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Import your logo images here
import logo1 from "../../assets/images/logo_EasyJob.png";
import logo2 from "../../assets/images/logo_EasyJob.png";
import logo3 from "../../assets/images/logo_EasyJob.png";
// Add more as needed

const logos = [logo1, logo2, logo3,logo1, logo2,logo3 ];

const CompanyCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Box sx={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px', fontWeight: '600', }}>
        Top Companies Hiring on Easy job
      </Typography>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <Box key={index} sx={{ padding: '0 10px' }}>
            <img
              src={logo}
              alt={`Company logo ${index + 1}`}
              style={{ width: '100%', height: 'auto', maxWidth: '150px' }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CompanyCarousel;
