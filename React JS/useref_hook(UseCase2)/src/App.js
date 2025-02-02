import { useRef } from 'react';
import './App.css';

// Use Case 2 : It is commonly used for accessing and interacting with DOM elements directly .

function App() {
  const btnRef=useRef();
  function handleClick()
  {
    btnRef.current.style.backgroundColor="red";
  }
  return (
    <div className="App">
      <button ref={btnRef} onClick={handleClick}>Change My color</button>
    </div>
  );
}

export default App;
