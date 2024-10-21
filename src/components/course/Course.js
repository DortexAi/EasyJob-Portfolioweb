// import React from 'react'
// import './course.css'

// import imageOne from '../../assets/college-placement-card.png';
// import imageTwo from '../../assets/fr-card-1.png';
// import imageThree from '../../assets/job-card.png';
// import imageFour from '../../assets/resume-builder-card.png';
// import imageFive from '../../assets/training-card-1.png';
// import imageSix from '../../assets/college-placement-card.png';

// function Course() {
//   return (
//     <section>
//       <div className='left-div'>
//         <h1>Why pay for expensive courses to become job ready?</h1>
//         <h4>Pay Zero upfront fees.</h4>
//         <ul>
//           <li><a href="#">Learn from industry experts</a></li>
//           <li><a href="#">Get hands-on experience</a></li>
//           <li><a href="#">Join a community of learners</a></li>
//         </ul>
//         <div className='button-div'>
//           <button className='custom-button'>Register For Free</button>
//           <button className='custom-button'>Explore course</button>
//         </div>
//       </div>

//       <div className='right-div'>
//         {cardsData.map((card, index) => (
//           <div key={index} className="card">
//             <img src={card.imageUrl} alt={card.title} className="card-image" />
//             <h5 className="card-title">{card.title}</h5>
//             <p className="card-description">{card.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default Course

// const cardsData = [
//   {
//     title: '',
//     imageUrl: imageOne,
//     description: '',
//   },
//   {
//     title: '',
//     imageUrl: imageTwo,   
//     description: '',
//   },
//   {
//     title: '',
//     imageUrl: imageThree,
//     description: '',
//   },
//   {
//     title: '',
//     imageUrl: imageFour,
//     description: '',
//   },
//   {
//     title: '',
//     imageUrl: imageFive,   
//     description: '',
//   },
//   {
//     title: '',
//     imageUrl: imageSix,
//     description: '',
//   },
// ];


import React from 'react';
import './course.css';

import imageOne from '../../assets/college-placement-card.png';
import imageTwo from '../../assets/fr-card-1.png';
import imageThree from '../../assets/job-card.png';
import imageFour from '../../assets/resume-builder-card.png';
import imageFive from '../../assets/training-card-1.png';
import imageSix from '../../assets/college-placement-card.png';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function Course() {
  const cardsData = [
    {
      title: 'College Placement',
      imageUrl: imageOne,
      description: 'Get placed in top colleges with our placement support.',
    },
    {
      title: 'Free Course',
      imageUrl: imageTwo,
      description: 'Access free courses and enhance your skills.',
    },
    {
      title: 'Job Assistance',
      imageUrl: imageThree,
      description: 'Our programs include job placement assistance.',
    },
    {
      title: 'Resume Builder',
      imageUrl: imageFour,
      description: 'Create professional resumes easily.',
    },
    {
      title: 'Training Programs',
      imageUrl: imageFive,
      description: 'Join industry-standard training programs.',
    },
    {
      title: 'Advanced Placement',
      imageUrl: imageSix,
      description: 'Secure high-paying jobs with our advanced placement services.',
    },
  ];

  return (
    <section className="course-section">
      <div className='left-div'>
        <h1>Why pay for expensive courses to become job ready?</h1>
        <h4>Pay Zero upfront fees.</h4>
        <ul>
          <li><a href="#">Learn from industry experts</a></li>
          <li><a href="#">Get hands-on experience</a></li>
          <li><a href="#">Join a community of learners</a></li>
        </ul>
        <div className='button-div' >
        <Stack spacing={2} direction="row" >   
        <Button variant="contained" sx={{backgroundColor:'#58a8dd'}}>Register For Free</Button>
        <Button variant="contained"  sx={{backgroundColor:'#58a8dd'}}>Exlore Course</Button>
        </Stack>
          {/* <button className='custom-button'>Register For Free</button>
          <button className='custom-button'>Explore Course</button> */}
        </div>
      </div>

      <div className='right-div'>
        {cardsData.map((card, index) => (
            <img src={card.imageUrl} alt={card.title} className="card-image"  />
          ))}
      </div>
    </section>
  );
}

export default Course;

