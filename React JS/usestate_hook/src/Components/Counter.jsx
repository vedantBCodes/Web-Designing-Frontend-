import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [Count , Setcount] =useState(0);
  return (
    <div className='container'>
        <div className='subContainer'>
      <p>You click {Count} Times</p>
      <button onClick={()=>{Setcount(Count+1)}}>Click me</button>
      </div>
    </div>
  )
}

export default Counter
