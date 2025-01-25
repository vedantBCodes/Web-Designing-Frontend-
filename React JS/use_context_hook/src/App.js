import { createContext, useState } from 'react';
import './App.css';
import ChildA from './ChildA';

function App() {
  // Step 1 : create context
  const UserContext=createContext();
  // Step 2 : Wrap all the childs inside the provider 
  // Step 3 : pass value
  // Step 4 : make the consumer consume the value
  const [user,setUser] = useState({name:'vedant'}) ; //Here we are setting the user as an object
  return (
    <div className="App">
     <UserContext.Provider value={user}>
      <ChildA/> 
      {/* Here ChildA and all its subsequent childs can access user state */}
      </UserContext.Provider>
    </div>
  );
}

export default App;
export {UserContext} 
