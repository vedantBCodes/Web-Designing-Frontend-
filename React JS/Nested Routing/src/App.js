import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Course from './Components/Course';
import Reports from './Components/Reports';
import Mocktest from './Components/Mocktest';

// ROUTING USING BROWSER-ROUTER

const router=createBrowserRouter(
  [
    {
      path : "/",
      element : 
      <div>
         <Navbar/> 
         <Home/>
      </div>
    },
    {
      path : "/about",
      element : 
      <div>
      <Navbar/> 
      <About/>
   </div>
    },
    {
      path : "/dashboard",
      element : 
      <div>
      <Navbar/> 
      <Dashboard/>
   </div>,
   children:[
    {
      path:'courses',
      element:<Course/>
    },
    {
      path:'reports',
      element:<Reports/>
    },{
      path:'mocktest',
      element:<Mocktest/>
    }
   ]
    }
  ]
);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
