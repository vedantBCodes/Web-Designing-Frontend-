import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';


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
   </div>
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
