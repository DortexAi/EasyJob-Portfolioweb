import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './Courses.css';

const CourseCard = () => {
  const courses = [
    {
      title: "Full Stack Development with React & Node Js",
      duration: "6 months",
      curriculum: [
        "Data structures and Algorithms",
        "Fundamentals of HTML, CSS, and Advanced Javascript",
        "Frontend with ReactJS",
        "5 industry-grade AI-powered projects",
      ],
      placements: [
        "Unlimited mock interviews",
        "1:1 coaching for Job Preparation",
        "Pay after Placement with no upfront fees",
      ],
      backgroundColor: '#ECF9ED',
      textColor: '#4CAF50',
    },
    {
      title: "Frontend Development with React Js",
      duration: "4 months",
      curriculum: [
        "Data structures and Algorithms",
        "Fundamentals of HTML, CSS, and Javascript",
        "Frontend with ReactJS",
        "5 industry-grade AI-powered projects",
      ],
      placements: [
        "Unlimited mock interviews",
        "1:1 coaching for Job Preparation",
        "Pay after Placement with no upfront fees",
      ],
      backgroundColor: '#E6F7F9',
      textColor: '#008080',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
     
     <Slider {...settings}>
      {courses.map((course, index) => (
          <div className="card" key={index} style={{ backgroundColor: course.backgroundColor, color: course.textColor }}>
          <h3>{course.title}</h3>
          <p><strong>Duration:</strong> {course.duration}</p>
          <h4>Curriculum</h4>
          <ul className="curriculum-list">
            {course.curriculum.map((item, idx) => (
                <li className="list-item" key={idx}>{item}</li>
            ))}
          </ul>
          <h4>Placements</h4>
          <ul>
            {course.placements.map((item, idx) => (
                <li className="list-item" key={idx}>{item}</li>
            ))}
          </ul>
          <button className="explore-button">Explore</button>
        </div>
      ))}
     </Slider>
   </>
  );
};

export default CourseCard;