import './App.css'
import data from '../public/data.json'
import { useState } from 'react';

function App() {
  const [newData,setData] = useState(data)
console.log(data);
function handleChange(e)
{
  const updatedData = data.filter((data1)=>(
    data1.name.toLowerCase().startsWith(e.target.value)
  ))
  setData(updatedData)
}

  return (
    <>
      <input type="text" placeholder='Search data by Name :' style={{padding:'10px', borderRadius:'5px'}} onChange={handleChange}/>
     <table>
      <thead>
        <tr>
        <th>Sr.No</th>
        <th>Name</th>
        <th>Roll_no</th>
        <th>Marks</th>
        </tr>
      </thead> <br />
      <tbody>
        {newData.map((miniData)=>(
          <tr key={miniData.sr_no} className='row'>
            <td>{miniData.sr_no}</td>
            <td>{miniData.name}</td>
            <td>{miniData.roll_no}</td>
            <td>{miniData.marks}</td>
          </tr>
        ))}
      </tbody>
     </table>
    </>
  )
}

export default App
