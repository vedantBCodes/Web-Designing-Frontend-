import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3000/users')
    .then((res)=>{
      console.log(res.data);
      setData(res.data);
      console.log(data);
      
    })
    .catch((err)=>{
      console.log("Error fetching data from frontend",err);
    })
  },[]);
  return (
    <>
    <h1>Hello</h1>
      <h2>User List:</h2>
      <table border={1}>
        <thead>
        <tr>
          <th>Name </th>
          <th>Age </th>
          <th>Gender </th>
        </tr>
        </thead>
        <tbody>
        {data.map((user) => (
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  )
}
export default App
