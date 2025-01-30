import React from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate=useNavigate();

  function haldleClick()
  {
    navigate('/dashboard')
  }
  return (
    <div>
      About Page
      <button onClick={haldleClick}>Go to Dashboard page</button>
    </div>
  )
}

export default About
