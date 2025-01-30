import React from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate();

  function haldleClick()
  {
    navigate('/about')
  }
  return (
    <div>
      Home Page <br />
      <button onClick={haldleClick}>Go to About page</button>
    </div>
  )
}

export default Home
