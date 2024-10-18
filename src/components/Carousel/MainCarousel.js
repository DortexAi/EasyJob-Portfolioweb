import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // carousel default styles
import "./MainCarousel.css"; // custom styles
import temp2 from "../../assets/images/temp2.jpeg";

const MainCarousel = () => {
  const slides = [
    { img: temp2, caption: "Caption One" },
    { img: temp2, caption: "Caption Two" },
    { img: temp2, caption: "Caption Three" },
    { img: temp2, caption: "Caption Four" },
    { img: temp2, caption: "Caption Five" },
    { img: temp2, caption: "Caption Six" },
    { img: temp2, caption: "Caption Seven" },
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
