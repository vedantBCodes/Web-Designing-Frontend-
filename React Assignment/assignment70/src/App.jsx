import { useState } from 'react'
import './App.css'

function App() {
  const [data,setData] = useState([
    {name:'Mango',
      cnt:0
    },
    {name:'Banana',
      cnt:0
    },
    {name:'Apple',
      cnt:0
    },
    {name:'Anjeer',
      cnt:0
    }
  ])
  function decrement(index)
  {
   console.log(data[index].cnt);
   setData(data.map((item, i) =>
    i === index ? { ...item, cnt: item.cnt - 1 } : item));
  }

  function increment(index)
  {
   console.log(data[index].cnt);
   setData(data.map((item, i) =>
    i === index ? { ...item, cnt: item.cnt + 1 } : item));
  }
  return (
    <>
    <div className='container'>
      {data.map((data1,index) =>(
        <div style={{border:'1px solid black', marginRight:'5px', borderRadius:'10px',padding:'5px'}}>
          {data1.name} <br /> <br />
          <button onClick={()=>decrement(index)}>-</button> &nbsp;&nbsp;{data1.cnt} &nbsp; &nbsp;<button onClick={()=>increment(index)}>+</button>
        </div>
      ))}
      </div>
    </>
  )
}

export default App
