import './App.css'

import Home from "./pages/Home/Home.js";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import AboutUs from './pages/About/About.js';
import Register from './pages/Register/Register.js';
import Dashboard from './pages/Dashboard/Dashboard.js';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <Home/> 
    },
    {
      path:"/about",
      element: <AboutUs/> 
    },
    {
      path:"/register",
      element: <Register/> 
    },
    {
      path:"/dashboard",
      element: <Dashboard/> 
    },
  ],
  { basename: "https://NDVashist.github.io/EasyJob-Portfolio" } 
)

function App() {
  return (
    <div>
       <RouterProvider router={router}/>
       {/* <Home/> */}
    </div>
    );
}

export default App;

//"homepage": "https://NDVashist.github.io/EasyJob-Portfolio",