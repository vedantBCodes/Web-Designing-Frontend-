import './App.css';
import LoginBtn from './LoginBtn';
import LogoutBtn from './LogoutBtn';
import { useState } from 'react';

function App() 
{
  const [isLogin,setLogin] =useState(false);

  // Conditional Redering
  // 1. if else
  if(isLogin==true)
  {
    return (
      <div>
      <LogoutBtn/>
      </div>
  )
}
  else
  {
    return (
      <div>
      <LoginBtn/>
      </div>
    )
  }
  

// 2. Ternary operator
/*
return (
  <div>
  {isLogin ? <LogoutBtn/> : <LoginBtn/> }
  </div>
)
*/

// 3. Bitwise Operator
/*
return (
  <div>
    {isLogin && <LogoutBtn/>}
    {isLogin!=true && <LoginBtn/>}
  </div>
)
*/

}

export default App;
