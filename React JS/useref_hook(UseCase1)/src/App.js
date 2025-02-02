import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

// Use case 1: The useRef hook in React is used to persist values across renders without causing a re-render when its value changes. 

function App() {

  const [count,setCount] = useState(0);
  let x=useRef(10);
  let y=10;
  useEffect(() => {
    console.log('re-rendering the whole component');
  })

  function handleClick()
  {
    x.current=x.current+1;
    y = y + 10;
    console.log('The value of x :',x.current);
    console.log('The value of y :',y);
    setCount(count+1);
  }
  return (
    <div className="App">
       <button onClick={handleClick}>{count}</button> <br/> <br/>
      <button onClick={handleClick}>+</button>
    </div>
  );
}

export default App;
