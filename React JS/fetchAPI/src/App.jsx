import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>
      response.json()
    )
    .then((data)=>{
      console.log(data);
      setData(data);
    })
    .catch((err)=>{
      console.log("Error fetching data",err);
    })
  }, [] ) ;
  return (
    <>
     <h1>Data</h1>
    <table border={1}>
      <thead>
        <tr>
        <th>Name :</th>
        <th>Username :</th>
        <th>Email :</th>
        <th>Phone :</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user)=>(
          <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          </tr>
        ))}
       
      </tbody>
    </table>
    </>
  )
}

export default App