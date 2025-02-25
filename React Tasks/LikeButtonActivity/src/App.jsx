import { useState } from 'react'
import './App.css'

function App() {
  const [isLiked,SetIsLike] =  useState(false);
  function toggleLike()
  {
    SetIsLike(!isLiked);
  }
  return (
    <>
    <p onClick={toggleLike} style={{fontSize:'40px'}}>{isLiked==false ? <i class="fa-regular fa-heart"></i> : <i class="fa-solid fa-heart" style={{color:'red'}}></i> }</p>
    </>
  )
}

export default App
