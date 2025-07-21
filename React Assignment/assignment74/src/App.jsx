import { useState } from 'react'
import './App.css'

function App() 
{
  const [cnt,setCnt] = useState(0);
  function handleClick(step)
  {
    setCnt(cnt+step);
  }
  return (
    <>
      <button style={{backgroundColor:'blue', padding:'5px'}} onClick={()=>handleClick(-5)}>-5</button> &nbsp;&nbsp;
      <button style={{backgroundColor:'blue', padding:'5px'}} onClick={()=>handleClick(-1)}>-1</button> &nbsp;&nbsp;
      <button style={{backgroundColor:'blue', padding:'5px'}} onClick={()=>handleClick(+1)}>+1</button> &nbsp;&nbsp;
      <button style={{backgroundColor:'blue', padding:'5px'}} onClick={()=>handleClick(+5)}>+5</button> <br />
      <h1>Score : {cnt}</h1>
    </>
  )
}

export default App
