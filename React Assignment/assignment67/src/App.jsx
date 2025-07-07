import './App.css'
import { useState } from 'react'
import hardik from './Images/hardik.jpg'
import mahendra from './Images/mahendra.jpg'
import rahul from './Images/rahul.jpg'
import rohit from './Images/rohit.jpg'
import surya from './Images/surya.jpg'
import virat from './Images/virat.jpg'

function App() {
  const [player,setPlayer] = useState([hardik,mahendra,rahul,rohit,surya,virat]);
  const [currentIndex,setCurrentIndex] = useState(0);

  function movePrevious()
  {
    setCurrentIndex(currentIndex-1);
  }
  function moveNext()
  {
    setCurrentIndex(currentIndex+1);
  }
  return (
    <>
      <button onClick={movePrevious} disabled={currentIndex<1}>Previous player</button> &nbsp; &nbsp; &nbsp;
      <button onClick={moveNext} disabled={currentIndex>4}>Next player</button> <br /> <br />
      {currentIndex>=0 && currentIndex<=5 ? <img src={player[currentIndex]} alt="" /> : null}      
    </>
  )
}

export default App
