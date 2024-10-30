import "./App.css";
import Home from "./pages/Home/Home.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./pages/About/About.js";
import Register from "./pages/Register/Register.js";
import Dashboard from "./pages/Dashboard/Dashboard.js";
import Navbar from "./components/navbar/Navbar.js";
import Footer from "./components/footer/Footer.js";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <>
         <Home />
        </>
      ),
    },
    {
      path: "/about",
      element: 
      <>
        <Navbar/>
        <AboutUs />,
        <Footer/>
      </>
    },
    {
      path: "/register",
      element:
      <>
        <Navbar/>
        <Register />,
        <Footer/>
      </>
    },
    {
      path: "/dashboard",
      element: 
      <>
        <Dashboard />,
        
      </>
    },
   
  ],
  { basename: "/EasyJob-Portfolio" }
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      {/* <Home/> */}
    </div>
  );
}

export default App;

//"homepage": "https://NDVashist.github.io/EasyJob-Portfolio",
