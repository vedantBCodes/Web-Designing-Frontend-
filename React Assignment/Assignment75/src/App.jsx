import './App.css'
import { useState } from 'react';
import arijit from './Images/arjit.jpg'
import shreya from './Images/shreya.jpg'
import sonu from './Images/sonu.jpg'

function App() {
  const[names,setNames] = useState(['Sonu Nigam','Shreya Ghosal','Arijit Singh']);
  const[singers,setSingers] = useState([sonu,shreya,arijit]);
  const[currentIndex,setCurrentIndex] = useState(-1);

  function handleClick(index)
  {
    setCurrentIndex(index);
  }

  return (
    <>
    <div className='container'>      
      <div>
      {names.map((name,index)=>(
          <button style={{marginRight:'10px', backgroundColor:'blue'}} onClick={()=>handleClick(index)}>{name}</button> 
      )
    )}
    <br /> <br />
    {(currentIndex!=-1) ? <img src={singers[currentIndex]} alt="" width={300}/> : null}
    </div>
</div>
    </>
  )
}

export default App
