// import React, { useRef } from 'react';
// import './CarouselSmall.css'; // Import the CSS

// const CarouselSmall = () => {
//   const carouselRef = useRef(null);

//   // Handle scroll on wheel
//   const handleWheel = (event) => {
//     event.preventDefault();
//     const scrollAmount = event.deltaY < 0 ? -800 : 800;
//     carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//   };

//   // Handle left/right arrow scroll
//   const scrollLeft = () => {
//     carouselRef.current.scrollBy({ left: -800, behavior: 'smooth' });
//   };

//   const scrollRight = () => {
//     carouselRef.current.scrollBy({ left: 800, behavior: 'smooth' });
//   };

//   return (
//     <div className="carousel-container">
//       <div className="arrow left" onClick={scrollLeft}>&#9664;</div>
//       <div className="carousel" onWheel={handleWheel} ref={carouselRef}>
//         <div className="slide">Slide 1</div>
//         <div className="slide">Slide 2</div>
//         <div className="slide">Slide 3</div>
//         <div className="slide">Slide 4</div>
//         <div className="slide">Slide 5</div>
//         {/* Add more slides as needed */}
//       </div>
//       <div className="arrow right" onClick={scrollRight}>&#9654;</div>
//     </div>
//   );
// };

// export default CarouselSmall;
