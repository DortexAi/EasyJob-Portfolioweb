import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // carousel default styles
import "./MainCarousel.css"; // custom styles
import backimage1 from "../../assets/backimage1.jpg";
import backimage2 from "../../assets/backimage2.jpg"
 
const MainCarousel = () => {
  const slides = [
    { img: backimage1, caption: "Caption One" },
    { img: backimage2, caption: "Caption Two" },
    { img: backimage1, caption: "Caption Three" },
    { img: backimage2, caption: "Caption Four" },
    { img: backimage1, caption: "Caption Five" },
    { img: backimage2, caption: "Caption Six" },
    { img: backimage1, caption: "Caption Seven" },
  ];

  return (
    <div className="carousel-container">
      <Carousel
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        swipeable={true}
        dynamicHeight={false}
      >
        {slides.map((slide, index) => (
          <div key={index}>
            <img src={slide.img} alt={slide.caption} className="carousel-image" />
            {/* <p className="legend">{slide.caption}</p> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MainCarousel;
