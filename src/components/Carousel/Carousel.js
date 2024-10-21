import React from 'react';
import Slider from 'react-slick';
import temp2 from '../../assets/images/logo_EasyJob.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


// Custom Arrow components for left and right arrows
const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick} style={{ ...arrowStyle, right: '10px', }}>
      <span style={{ fontSize: '3rem', color: '#000' }}>.</span>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick} style={{ ...arrowStyle, left: '10px' }}>
      <span style={{ fontSize: '3rem', color: '#000' }}>.</span>
    </div>
  );
};

// Inline style for arrow components
const arrowStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: '50%',
  transform: 'translate(0, -50%)',
  zIndex: 2,
  cursor: 'pointer',
  background: 'transparent',
  borderRadius: '50%',
  padding: '5px',
  
};

const Carousel = () => {
  const settings = {
    dots: true,            
    infinite: true,          
    speed: 100,              
    slidesToShow: 3,
    autoPlay: true,        
    slidesToScroll: 1,
    autoplaySpeed: 3000,       
    nextArrow: <NextArrow />,  
    prevArrow: <PrevArrow />,  
    responsive: [            
      {
        breakpoint: 1024,    
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,  //tablet
        settings: {
          slidesToShow: 2,  
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600, //Mobile    
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
       
    ]
  };

  return (
    <div className="carousel-container" style={{ padding: '20px', background: '#f9f9f9' }}>
      <h2>Responsive Carousel</h2>
      <Slider {...settings}>
        <div className=''>
          <img src={temp2} alt="Slide 1" height={400} width={400} />
        </div>
        <div>
          <img src={temp2} alt="Slide 2" height={400} width={400} />
        </div>
        <div>
          <img src={temp2} alt="Slide 3" height={400} width={400}/>
        </div>
        <div>
          <img src={temp2} alt="Slide 4" height={400} width={400}/>
        </div>
        <div>
          <img src={temp2} alt="Slide 5" height={400} width={400}/>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
