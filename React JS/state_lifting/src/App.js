import './App.css';
import ChildInput from './ChildInput';
import { useState } from 'react';

function App() {
  // Create State
  // Manage State
  // Change state
  // Syn state in all the child 
  const [name,setName] = useState('');

  return (
    <div className="App">
      <ChildInput  name={name} setName={setName} /> 
       <p>Name updated in the parent Component : {name}</p>
    </div>
  );
}

export default App;
