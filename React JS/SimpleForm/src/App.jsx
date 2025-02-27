import { useState } from 'react'

import './App.css'

function App() 
{
  const [data, setData] = useState({
    FirstName : "",
    MiddleName : "",
    LastName : "",
    PhoneNumber : "",
    Gender : "",
    About : "",
  })
  function handleChange(event)
  {
    event.preventDefault();
    setData({...data,
      [event.target.name]:[event.target.value]}
    )
  }
  function showData(event)
  {
    event.preventDefault();
    console.log(data);
  }
  return (
    <>
    <main>
      <div>
      <form action="" onSubmit={showData}>
        <h2>Simple Form</h2>
        <label htmlFor="firstname">FirstName : </label> &nbsp; <br />
        <input type="text" id='firstname' name='FirstName' placeholder='Enter First Name :' onChange={handleChange}/> <br /> <br />
        <label htmlFor="secondname">MiddleName : </label> &nbsp; <br />
        <input type="text" id='secondname' name='MiddleName' placeholder='Enter Middle Name :' onChange={handleChange}/> <br /> <br />
        <label htmlFor="lastname">LastName :</label> &nbsp; <br />
        <input type="text" id='lastname' name='LastName' placeholder='Enter Last Name :' onChange={handleChange}/> <br /> <br />
        <label htmlFor="phoneNo">Phone No :</label> &nbsp; <br />
        <input type="number" id='phoneNo' name='PhoneNumber' placeholder='Enter Phone Number :' onChange={handleChange}/> <br /> 
        <h3>Gender</h3>
        <div className="gender">
        <div>
        <label htmlFor="male">Male</label>
        <input type="radio" id='male' name='Gender' value='male' onChange={handleChange}/> 
        </div>
        <div>
        <label htmlFor="female">Female</label>
        <input type="radio" id='female' name='Gender' value='female' onChange={handleChange}/> 
        </div>
        <div>
        <label htmlFor="other">Other</label>
        <input type="radio" id='other' name='Gender' value='other' onChange={handleChange}/> 
        </div><br /> <br />
        </div>
        <label htmlFor="about">About : </label> <br />
        <textarea name="About" id="about" onChange={handleChange}></textarea> <br /> <br />
        <div id='resetAndSubmit'>
        <input type="reset" /> 
        <input type="submit" />
        </div>
      </form>
      </div>
      <div className='hide'>
        <h1>Data :</h1>
        <li>FirstName : {data.FirstName}</li>
        <li>MiddleName : {data.MiddleName}</li>
        <li>LastName : {data.LastName}</li>
        <li>Phone Number : {data.PhoneNumber} </li>
        <li>Gender : {data.Gender}</li>
        <li>About : {data.About}</li>
      </div>
      </main>
    </>
  )
}

export default App
