import { useState } from 'react'
import { generateTicket ,sum } from './helper';
import './App.css'

function App() {
  const [lottery, setLottery] = useState(generateTicket(3));
  function setNewTicket()
  {
    setLottery(generateTicket(3));
  }
  return (
    <>
    <div className='container'>
     <h1>Lottery Game</h1>
     <div className='lottery'>
      <span>{lottery[0]}</span>
      <span>{lottery[1]}</span>
      <span>{lottery[2]}</span>
     </div> <br />
     <button onClick={setNewTicket}>Buy New Ticket</button> <br /> <br />
     <span style={{fontSize:'20px'}}>{ sum(lottery) == 15 ? "Congratulations ! You Won"  : ""}</span> {/* You win when the sum of tha numbers on lottery ticket is equal to 15 */}
     </div>
    </>
  )
}

export default App
