import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Carousel from './components/Carousel/Carousel';
import Header from './components/header/Header';
import MainCarousel from './components/Carousel/MainCarousel';
import HowItWorks from './components/Home/howItWork/HowItWork';
import CourseCard from './components/Home/Courses/Courses';
import Space from './components/Space';
import WhyEasyjob from './components/Home/WhyEasyJob/WhyEasyJob';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <MainCarousel/>
      <section> 
        <HowItWorks/>
      </section>
      <section> 
      <CourseCard/>
      </section>
      
      
      {/* <Carousel/> */}
      <Space height={'30px'}/>
      <WhyEasyjob/>
      <Space height={'30px'}/>
    <Footer />
    </div>
  );
}

export default App;
