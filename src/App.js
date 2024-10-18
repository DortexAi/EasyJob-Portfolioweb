import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Carousel from './components/Carousel/Carousel';
import Header from './components/header/Header';
import MainCarousel from './components/Carousel/MainCarousel';


function App() {
  return (
    <div className="App">
     <Navbar/>
     {/* <Navbar /> */}
     
      {/* <header className="App-header">
        
      </header> */}
      {/* <Header/> */}
      <Carousel/>
    <Footer />
    </div>
  );
}

export default App;
