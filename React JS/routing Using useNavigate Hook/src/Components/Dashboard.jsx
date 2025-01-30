import React from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate=useNavigate();

  function haldleClick()
  {
    navigate('/home')
  }
  return (
    <div>
      Home Page <br />
      <button onClick={haldleClick}>Go back to home</button>
    </div>
  )
}

export default Dashboard
