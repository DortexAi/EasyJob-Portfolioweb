import React, { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // carousel default styles
import "./MainCarousel.css"; // custom styles
import temp2 from '../../assets/images/temp2.jpeg';
const MainCarousel = () => {
  const [slideCount, setSlideCount] = useState(1);
  const [autoSlideCheck, setAutoSlideCheck] = useState(true);

  const slides = [
    {
      img:{temp2} ,
      caption: "Caption One",
    },
    {
      img: {temp2},  caption: "Caption Two",
    },
    {
      img: {temp2}, caption: "Caption Three",
    },
    {
      img: {temp2},    caption: "Caption Four",
    },
    {
      img: {temp2},    caption: "Caption Five",
    },
    {
      img: {temp2},   caption: "Caption Six",
    },
    {
      img: {temp2},    caption: "Caption Seven",
    },
  ];

  return (
    <div>
      {/* <div className="countSelectorSection">
        <label>Choose slide count:</label>
        <select
          id="countSelector"
          onChange={(e) => setSlideCount(Number(e.target.value))}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>
      </div>

      <div className="autoCheck">
        <label>Autoslide:</label>
        <input
          type="checkbox"
          checked={autoSlideCheck}
          id="autoSlideCheck"
          onChange={(e) => setAutoSlideCheck(e.target.checked)}
        />
      </div> */}

      <div className="slideshow-container">
        <Carousel
          autoPlay={autoSlideCheck}
          interval={3000}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          selectedItem={1}
          swipeable={true}
          dynamicHeight={false}
          centerMode={1}
          centerSlidePercentage={100 / slideCount}
        >
          {slides.map((slide, index) => (
            <div key={index}>
              <img src={temp2} alt={slide.caption} width={'100%'} />
              <p className="legend">{slide.caption}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MainCarousel;
